import React, { useState, useEffect } from "react";

import axios from "axios";
export const Home = () => {
  const [users, setUsers] = useState([]);
  console.log(setUsers);
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
  // setUsers("");
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
                  <button className="btn btn-primary ">view</button>
                  <button className="btn btn-outline-primary mx-2">edit</button>
                  <button className="btn btn-danger">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
