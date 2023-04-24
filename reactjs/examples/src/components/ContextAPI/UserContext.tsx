import React, { createContext, useState } from "react";

export interface UserContextProps {
  isOnline: boolean;
  setIsOnline: React.Dispatch<React.SetStateAction<boolean>>;
}
interface MyComponentProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextProps>({
  isOnline: false,
  setIsOnline: () => {},
});

export const UserProvider: React.FC<MyComponentProps> = ({ children }) => {
  const [isOnline, setIsOnline] = useState<boolean>(false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 );

  return (
    <UserContext.Provider value={{ isOnline, setIsOnline }}>
      {children}
    </UserContext.Provider>
  );
};