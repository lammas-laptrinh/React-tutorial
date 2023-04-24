import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginButton: React.FC = () => {
  const { setIsOnline } = useContext(UserContext);

  const handleLogin = () => {
    setIsOnline(true);
  };

  return (
    <button onClick={handleLogin}>Login</button>
  );
};