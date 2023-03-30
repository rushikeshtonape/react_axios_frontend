import React from "react";

const AddUser = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 border rounded offset-md-3  mt-2 p-4 shadow">
            <h2 className="text-center m-6">Register here</h2>
            <div className="mb-3">
              <label htmlFor="name" className="m-2">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter the Name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="m-2">
                UserName:
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter the UserName"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="m-2">
                Email:
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Enter the Email"
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <button className="btn btn-outline-danger m-2">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
