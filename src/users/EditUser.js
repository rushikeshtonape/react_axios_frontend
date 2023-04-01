import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    console.log(result.data);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 border rounded offset-md-3  mt-2 p-4 shadow">
            <h2 className="text-center m-6">Edit User</h2>
            <div className="mb-3">
              <label htmlFor="name" className="m-2">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter the Name"
                value={name}
                onChange={(e) => onInputChange(e)}
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
                value={username}
                onChange={(e) => onInputChange(e)}
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
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={(e) => onSubmit(e)}
            >
              Submit
            </button>
            <Link to="/" className="btn btn-outline-danger m-2">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
