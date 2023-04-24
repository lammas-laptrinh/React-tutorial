import React, { createContext, useState } from 'react';

type ContextType = {
  items: string[];
  addMember: (item: string) => void;
  deleteMember: (index: number) => void;
};

const defaultValue: ContextType = {
  items: ['Thiên Bảo'],
  addMember: (item: string) => { },
  deleteMember: (index: number) => { },
};

export const Context = createContext<ContextType>(defaultValue);

type ProviderProps = {
  children: React.ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  const [items, setMembers] = useState<string[]>(defaultValue.items);

  const addMember = (item: string) => {
    setMembers([...items, item]);
  };
  const deleteMember = (index: number) => {
    const newItems = items.filter((item, idx) => idx !== index);
    setMembers(newItems);
  };
  return (
    <Context.Provider value={{ items, addMember, deleteMember }}>
      {children}
    </Context.Provider>
  );
};
