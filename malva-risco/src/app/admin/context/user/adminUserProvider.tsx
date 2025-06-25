"use client";
import { createContext, useReducer } from "react";
import {
  ActionType,
  AdminContextAction,
  BLANK_USER,
  IAdminUser,
} from "./model";

const AdminUserReducer = (
  state: IAdminUser,
  action: AdminContextAction
): IAdminUser => {
  switch (action.type) {
    case ActionType.ADD:
      return { ...action.payload };
    case ActionType.UPDATE:
      return { ...action.payload };
    case ActionType.REMOVE:
      return { ...BLANK_USER };

    default:
      return state;
  }
};

export const AdminUserContext = createContext<{
  user: IAdminUser;
  addUser: (user: IAdminUser) => void;
}>({
  user: BLANK_USER,
  addUser: () => {},
});

export const AdminUserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, dispatch] = useReducer(AdminUserReducer, BLANK_USER);

  const addUser = (newUser: IAdminUser) =>
    dispatch({ type: ActionType.ADD, payload: newUser });

  return (
    <AdminUserContext.Provider value={{ user, addUser }}>
      {children}
    </AdminUserContext.Provider>
  );
};
