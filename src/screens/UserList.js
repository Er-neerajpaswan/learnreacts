import React from "react";
import UserCard from "../components/organs/UserCard/UserCard";
import data from "../utils/data";

function UserList() {
  return (
    <div>
      {data.map(({ name, email, rollNo }, index) => (
        <UserCard 
          key={index}
          name={name}
          email={email}
          rollNo={rollNo}
        />
      ))}
    </div>
  );
}

export default UserList;
