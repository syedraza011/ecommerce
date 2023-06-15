import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";
import axios from "axios";
import User from "./user";
import { navigate } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const [showNewForm, setShowNewForm] = useState(false);

  const submitHandler = async (user) => {
    try {
      const response = await axios.post("/api/users", user);

      console.log("server data", response.data);
      const newUser = {
        ...response.data,
      };
      let previous = [...users];
      previous = [...previous, newUser];
      setUsers(previous);
      // to update the state
      const _user = await fetch("/api/users");
      const json = await _user.json();

      setUsers(json.data);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  useEffect(() => {
    (async () => {
      // make async call
      const { data: allData } = await axios.get("/api/users");
      console.log(allData.data);
      setUsers((prev) => {
        return [...allData.data];
      });
    })();
  }, []);
  return (
    <div className="all-users">
      {/* sorting here */}
      <h2>All the Users</h2>

      <div className="grid">
        <div className="all-users__list grid grid-col-2">
          {users.length > 0 &&
            users.map((user) => {
              return <User user={user} key={user.id} />;
            })}
        </div>

        <div className="all-users__actions">
          {!showNewForm && (
            <button
              className="btn btn-add-new mb-sm"
              onClick={(e) => setShowNewForm(!showNewForm)}
            >
              Add new User
            </button>
          )}

          {showNewForm && <UserForm handleSubmit={submitHandler} />}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
