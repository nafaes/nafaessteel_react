import {
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
} from "../../constants/actionTypes/authConstants";

export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        userEmail: payload.email,
        token: payload.access_token,
        expiresIn: payload.expires_in,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: payload.message,
      };

    case LOGOUT_USER:
      return {
        loading: false,
        token: null,
        expiresIn: null,
        isAuthenticated: false,
        errorMessage: null,
      };
    default:
      return state;
  }
};
