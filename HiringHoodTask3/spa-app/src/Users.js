import React, { useEffect, useState } from "react";
import UserList from "./UserList";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="users-page">
      <h2>User List</h2>
      {loading ? <h3>Loading...</h3> : <UserList users={users} />}
    </div>
  );
}

export default Users;
