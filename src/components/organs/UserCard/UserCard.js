import React from "react";

function UserCard({ name, email, rollNo }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{rollNo}</p>
    </div>
  );
}

export default UserCard;
