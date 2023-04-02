import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  });

  const loadUser = async () => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    setUser(result.data);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 border rounded offset-md-3  mt-2 p-4 shadow">
            <h2 className="text-center m-6">View User</h2>

            <div className="card">
              <div className="card-header">
                Details of user Id:{user.id}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Name:{user.name}</b>
                  </li>
                  <li className="list-group-item">
                    <b>UserName:{user.username}</b>
                  </li>
                  <li className="list-group-item">
                    <b>Email:{user.email}</b>
                  </li>
                </ul>
              </div>
            </div>
            <Link className="btn btn-primary my-2" to="/">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUser;
