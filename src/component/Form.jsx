import React, { useState } from "react";

const Form = ({
    onSubmit,
}) => {
    const [inputParams, setInputParams] = useState({
        name: "",
        amount: "",
        dateTime: new Date(),
      });

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
          amount: event.target.value,
        });
      };

      const handleDate = (event) => {
        setInputParams({
          ...inputParams,
          dateTime: new Date(event.target.value),
        });

      };

      const _validate = (params) => {
            if (!params?.name) {
                validate.name = false;
                
                setValidate(validate);
                return;
            }

            if (!params?.amount) {
                validate.amount = false;
                setValidate(validate);
                return;
            }
      }
      const handleSubmitForm = (event) => {
        event.preventDefault();
        //validate

        _validate(inputParams);

        if (!validate.name || !validate.amount) {
            alert('Please check your input data before submit')
            return;
        }
        onSubmit(inputParams);
      };

    React.useEffect(() => {
        setValidate({name:true,amount:true})
    },[inputParams]);

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
          <form id="expense-app" onSubmit={handleSubmitForm}>
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
                    value={inputParams.amount}
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
                value={inputParams.dateTime.toISOString().split('T')[0] ?? new Date().toISOString().split('T')[0]}
                className="form-control"
                id="exampleInputDate"
                placeholder=""
                onChange={handleDate}
              />
            </div>
            </div>
            <div className="col-md-12 col-12 d-flex justify-content-end">
            <button className="btn btn-info w-30 pb-2 pt-2">
              Add Expense
            </button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Form;