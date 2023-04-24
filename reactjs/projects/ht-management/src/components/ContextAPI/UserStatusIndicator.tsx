import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const UserStatusIndicator: React.FC = () => {
  const { isOnline } = useContext(UserContext);

  return (
    <div>{isOnline ? "User is online" : "User is offline"}</div>
  );
};