import types from "../types";

const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER: {
      return [...state, action.user];
    }
    case types.REMOVE_USER: {
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
