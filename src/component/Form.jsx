import React, { useState } from "react";

const Form = ({
  onSubmit,
  onEdit,
  isEdit,
  onSelect,
  itemSelected,
  onRemove,
}) => {
  const [initInputParam] = useState({
    id: Date.now(),
    name: "",
    amount: "",
    dateTime: new Date(),
  });
  const [inputParams, setInputParams] = useState(initInputParam);

  const [validate, setValidate] = useState({
    name: true,
    amount: true,
  });

  const handleName = (event) => {
    setInputParams({
      ...inputParams,
      name: event.target.value,
    });
  };

  const handleAmount = (event) => {
    setInputParams({
      ...inputParams,
      amount: event.target.value.replace(/\D/g, ""),
    });
  };

  const handleDate = (event) => {
    setInputParams({
      ...inputParams,
      dateTime: event.target.value ? new Date(event.target.value) : new Date(),
    });
  };

  const handleEdit = (event) => {
    event.preventDefault();
    const itemEdited = { id: itemSelected.id, ...inputParams };
    _validate(itemEdited);
    if (!validate.name || !validate.amount) {
      alert("Please check your input data before submit");
      return;
    }
    onEdit(itemEdited);
    setInputParams({ ...initInputParam, id: Date.now() });
    onSelect();
  };

  const handleCancel = () => {
    setInputParams({ ...initInputParam, id: Date.now() });
    onSelect();
  };

  const handleRemove = (event) => {
    event.preventDefault();
    onSelect();
    onRemove(inputParams.id);
    setInputParams({ ...initInputParam, id: Date.now() });
  };

  const _validate = (params) => {
    if (!params?.name) {
      validate.name = false;
      setValidate(validate);
    }

    if (!params?.amount || Number(params?.amount) === 0) {
      validate.amount = false;
      setValidate(validate);
    }
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();

    _validate(inputParams);

    if (!validate.name || !validate.amount) {
      alert("Please check your input data before submit");
      return;
    }
    onSubmit(inputParams);
    setInputParams({ ...initInputParam, id: Date.now() });
  };

  React.useEffect(() => {
    setValidate({ name: true, amount: true });
  }, [inputParams]);

  React.useEffect(() => {
    setInputParams({
      ...initInputParam,
      ...itemSelected,
    });
  }, [itemSelected, initInputParam]);

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-8 col-12 pt-2">
            <h6 className="m-0">
              <strong>Expense App</strong>
            </h6>
          </div>
        </div>
      </div>
      <div className="card-body">
        <form id="expense-app">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="form-group">
                <label htmlFor="exampleInputTitle">
                  <strong>Title</strong>
                </label>
                <input
                  type="text"
                  value={inputParams.name}
                  className="form-control"
                  id="exampleInputTitle"
                  placeholder="Title"
                  onChange={handleName}
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="form-group">
                <label htmlFor="exampleInputAmount">
                  <strong>Amount</strong>
                </label>
                <input
                  type="text"
                  value={
                    inputParams.amount
                      ? Number(inputParams.amount).toLocaleString()
                      : ""
                  }
                  className="form-control"
                  id="exampleInputAmount"
                  placeholder="Amount"
                  onChange={handleAmount}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="form-group mb-3">
              <label htmlFor="exampleInputDate">
                <strong>Date</strong>
              </label>
              <input
                type="date"
                value={
                  inputParams?.dateTime && inputParams.dateTime instanceof Date
                    ? inputParams.dateTime.toISOString().split("T")[0]
                    : new Date().toISOString().split("T")[0]
                }
                className="form-control"
                id="exampleInputDate"
                placeholder=""
                onChange={handleDate}
              />
            </div>
          </div>
          <div className="col-md-12 col-12 d-flex justify-content-end">
            {isEdit && (
              <button
                onClick={handleEdit}
                className="btn btn-success w-30 pb-2 pt-2"
              >
                Edit Expense
              </button>
            )}
            {isEdit && (
              <button
                onClick={handleRemove}
                className="btn btn-danger w-30 pb-2 pt-2"
              >
                Remove Expense
              </button>
            )}
            {isEdit && (
              <button
                onClick={handleCancel}
                className="btn btn-info w-30 pb-2 pt-2"
              >
                Cancel
              </button>
            )}
            {!isEdit && (
              <button
                onClick={handleSubmitForm}
                className="btn btn-info w-30 pb-2 pt-2"
              >
                Add Expense
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
