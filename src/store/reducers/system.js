import { systemAction } from "../actions";

export const SYSTEM_INITIAL_STATE = {
  isLogged: false,
  isLoading: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case systemAction.SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case systemAction.SET_LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case systemAction.SET_LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      throw new Error("Invalid System Action");
  }
};

export default reducer;
