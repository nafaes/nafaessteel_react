import {
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  ACCOUNT_VERIFY,
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
        loading: false,
        errorMessage: null,
        isAuthenticated: true,
        userId: payload.userid,
        userName: payload.name,
        userEmail: payload.email,
        token: payload.token,
        expiresIn: payload.expiresIn,
        isVerified: payload.isverified
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: payload.message,
      };

    case ACCOUNT_VERIFY:
        return {
          ...state,
          loading: false,
          errorMessage: "",
    };
  
    case LOGOUT_USER:
      return {
        loading: false,
        token: null,
        expiresIn: null,
        isAuthenticated: false,
        errorMessage: null,
        userId: "",
        userName: "",
        userEmail: "",
      };
    default:
      return state;
  }
};
