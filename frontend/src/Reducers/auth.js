import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_FAIL,
  USER_LOADED_SUCCESS,
  AUTHENTICATED_SUCCES,
  AUTHENTICATED_FAIL,
  LOGOUT,
} from "../Actions/types";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  user: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATED_SUCCES:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("access", payload.access);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh,
      };

    case LOGOUT:
    case LOGIN_FAIL:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      console.log(state);
      return {
        ...state,
        isAuthenticated: false,
        access: null,
        refresh: null,
        user: null,
      };

    case USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
      };

    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    case USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}
