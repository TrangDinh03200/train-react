import React from "react";
import Item from "./Item";
const options = ["2020", "2021", "2022", "2023", "2024"];

const List = ({ list, onSelect }) => {
  const [initList, setInitList] = React.useState(list ?? []);
  const [filterValue, setFilterValue] = React.useState(null);

  const handleChangeOptions = (event) => {
    setFilterValue(Number(event.target.value));
  };

  React.useEffect(() => {
    setInitList(() => {
      if (filterValue !== null) {
        return list.filter(
          ({ dateTime }) => new Date(dateTime).getFullYear() === filterValue
        );
      }
      return list;
    });
  }, [filterValue, list]);

  return (
    <div className="row pt-5">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <div className="bg-dark card" style={{ color: "white" }}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-8 col-12">
                <div className="form-group">
                  <label htmlFor="exampleInputTitle">
                    <strong>Filter by year</strong>
                  </label>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="form-group row">
                  <>
                    <center>
                      <select
                        className="form-select"
                        onChange={handleChangeOptions}
                      >
                        {options.map((option, index) => {
                          return <option key={index}>{option}</option>;
                        })}
                      </select>
                    </center>
                  </>
                </div>
              </div>
            </div>
            {initList &&
              initList.map((itemSelected, index) => (
                <Item
                  key={index}
                  itemSelected={itemSelected}
                  onSelect={onSelect}
                ></Item>
              ))}
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default List;
