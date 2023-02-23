import React from "react";

const Item = ({ itemSelected, onSelect }) => {
    const handleSelect = () => {
        onSelect(itemSelected)
      }

  return (
    <div onClick={handleSelect} className="row item-block rounded p-1">
      <div className="col-md-2 daytime-block">
        <div>
          <strong>{itemSelected.dateTime.getDate()}</strong>
        </div>
        <div>
          <strong>
            {itemSelected.dateTime.toLocaleString("default", { month: "long" })}
          </strong>
        </div>
        <div>
          <strong>{itemSelected.dateTime.getFullYear()}</strong>
        </div>
      </div>
      <div className="col-md-8 title-name">
        <strong>{itemSelected.name}</strong>
      </div>
      <div className="col-md-2">
        <div className="form-group block-price">
          <label htmlFor="exampleInputTitle">
            <strong className="price">${itemSelected.amount ? Number(itemSelected.amount).toLocaleString() : ""}</strong>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Item;
