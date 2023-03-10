import "./App.css";
import React, { useState } from "react";
import List from "./component/List.jsx";
import Form from "./component/Form";

const App = (props) => {
  const [listSelected, setListSelected] = useState([]);
  const [itemSelected, setItemSelected] = useState(null);
  const [isEdit, setIsEdit] = React.useState(false);

  const onSubmit = (selected) => {
    // setListSelected([...listSelected, selected]);
    dispatch({
      type: "ADD",
      data: selected,
    });
  };

  const onSelect = (itemSelected) => {
    setIsEdit(!!itemSelected);
    setItemSelected(itemSelected);
  };

  const onEdit = (item) => {
    // setListSelected((prev) => {
    //   const tmp = prev.map((itemOld) => {
    //     if (itemOld.id === item.id) {
    //       return item;
    //     }
    //     return itemOld;
    //   });
    //   return tmp;
    // });
    dispatch({
      type: "EDIT",
      data: item,
    });
  };

  const onRemove = (id) => {
    // setListSelected((prev) => {
    //   return prev.filter((item) => item.id !== id);
    // });
    dispatch({
      type: "DEL",
      data: id,
    });
  };

  const initList = [];

  const listReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.data];
      case "DEL":
        return state.filter((item) => item.id !== action.data);
      case "EDIT" :
        return state.map((itemOld) => {
          if (itemOld.id === action.data.id) {
            return action.data;
          }
          return itemOld;
        });
      default:
        return state;
    }
  };

  const [list, dispatch] = React.useReducer(listReducer, initList);

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
      <List list={list} onSelect={onSelect}></List>
    </div>
  );
};

export default App;
