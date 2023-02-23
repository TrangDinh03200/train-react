import "./App.css";
import React, { useState } from "react";
import List from "./component/List.jsx";
import Form from "./component/Form";

const App = (props) => {
  const [listSelected, setListSelected] = useState([]);
  const [itemSelected, setItemSelected] = useState(null);
  const [isEdit, setIsEdit] = React.useState(false);

  const onSubmit = (selected) => {
    setListSelected([...listSelected, selected]);
  };

  const onSelect = (itemSelected) => {
    setIsEdit(!!itemSelected);
    setItemSelected(itemSelected);
  };

  const onEdit = (item) => {
    setListSelected((prev) => {
       const tmp = prev.map((itemOld) => {
        if (itemOld.id === item.id) {
          return item;
        }
        return itemOld;
      });
      return tmp
    });
  };

  const onRemove = (id) => {
    setListSelected((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8"></div>
        <div className="col-md-2"></div>
      </div>
      <Form
        onSubmit={onSubmit}
        onEdit={onEdit}
        isEdit={isEdit}
        itemSelected={itemSelected}
        onSelect={onSelect}
        onRemove={onRemove}
      ></Form>
      <List list={listSelected} onSelect={onSelect}></List>
    </div>
  );
};

export default App;
