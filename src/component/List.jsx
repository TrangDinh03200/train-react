import React from "react";
const options = ["2020", "2021", "2022", "2023", "2024"];

const List = ({ list }) => {
  const [initList, setInitList] = React.useState(list ?? []);
  const [filterValue, setFilterValue] = React.useState(null);
  const handleChangeOptions = (event) => {
    setFilterValue(event.target.value);
  };

  React.useEffect(() => {
    setInitList(() => {
      if (filterValue) {
        return list.filter(({ dateTime }) => dateTime.getFullYear() == filterValue);
      }
      return list
    })
  }, [filterValue]);

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
                        on
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
              initList.map((listSelected) => (
                <div className="row item-block rounded p-1">
                  <div className="col-md-2 daytime-block">
                    <div>
                      <strong>{listSelected.dateTime.getDate()}</strong>
                    </div>
                    <div>
                      <strong>{listSelected.dateTime.toLocaleString('default', { month: 'long' })}</strong>
                    </div>
                    <div>
                      <strong>{listSelected.dateTime.getFullYear()}</strong>
                    </div>
                  </div>
                  <div className="col-md-8 title-name">
                    <strong>{listSelected.name}</strong>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group block-price">
                      <label htmlFor="exampleInputTitle">
                        <strong className="price">${listSelected.amount}</strong>
                      </label>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default List;
