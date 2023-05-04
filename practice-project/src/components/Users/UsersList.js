import React from "react";

function UsersList(props) {
  const { users } = props;
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            Name is - {user.name} and age is - {user.age}
          </li>
        );
      })}
    </ul>
  );
}

export default UsersList;
