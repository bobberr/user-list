import types from "./types";

export const addUser = user => {
  return {
    type: types.ADD_USER,
    user
  };
};

export const removeUser = index => {
  return {
    type: types.REMOVE_USER,
    index
  };
};
