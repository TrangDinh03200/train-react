import "./App.css";
import React, { useState } from "react";
import List from "./component/List.jsx";
import Form from "./component/Form";

const App = (props) => {

  const [listSelected, setListSelected] = useState([]);
  const onSubmit = (selected) => {
    setListSelected([...listSelected, selected]);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">

        </div>
        <div className="col-md-2"></div>
      </div>
      <Form onSubmit={onSubmit}></Form>
      <List list={listSelected}></List>
    </div>
  );
};

export default App;
