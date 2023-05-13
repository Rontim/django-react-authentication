import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_FAIL,
  USER_LOADED_SUCCESS,
  AUTHENTICATED_SUCCES,
  AUTHENTICATED_FAIL,
  LOGOUT,
} from "./types";

import axios from "axios";

export const checkAuthenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({ token: localStorage.getItem("access") });

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/jwt/verify/`,
        body,
        config
      );

      if (response.data.code !== "token_not_valid") {
        dispatch({
          type: AUTHENTICATED_SUCCES,
        });
      }
    } catch (error) {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
  }
};

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      // eslint-disable-next-line no-undef
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/users/me/`,
        config
      );
      console.log(response.data);
      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: USER_LOADED_FAIL,
      });
      console.log(config);
      console.log(error);
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
    console.log("no access");
  }
};
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    // eslint-disable-next-line no-undef
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/jwt/create/`,
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
    dispatch(load_user());
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
    console.log(error);
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
