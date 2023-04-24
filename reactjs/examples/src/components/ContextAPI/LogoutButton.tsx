import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LogoutButton: React.FC = () => {
  const { setIsOnline } = useContext(UserContext);

  const handleLogout = () => {
    setIsOnline(false);
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};