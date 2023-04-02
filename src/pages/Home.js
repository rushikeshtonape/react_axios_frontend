import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link, useParams } from "react-router-dom";
export const Home = () => {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setUsers(result.data);
    //console.log(result.data.userId);
  };

  const deleteUser = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.userId}</td>
                <td>{user.id}</td>

                <td>{user.title}</td>
                <td>
                  <Link className="btn btn-primary " to="/viewuser">
                    view
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
