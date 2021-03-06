import { getUserDetails, logIn } from "../../services/auth";
import {
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
} from "../../constants/actionTypes/authConstants";
import {
  CHECKOUT,
  GUESTTRACKORDER,
  LANDING,
  ORDERS,
  SIGNIN,
  SIGNUP,
} from "../../constants/routes";
import history from "../../helpers/history";

export const loginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailed = (message) => {
  return {
    type: LOGIN_FAILED,
    payload: {
      message,
    },
  };
};

export const userLogout = () => {
  localStorage.removeItem("user");
  return {
    type: LOGOUT_USER,
  };
};

export const login = (email, password, dispatch, previousPath = "") => async (onError) => {
    dispatch(loginLoading());
    try {
      const response = await logIn(email, password);
      if (response) {
        const { userid, name } = await getUserDetails(
          email,
          response.access_token
        );
        dispatch(
          loginSuccess({
            token: response.access_token,
            expiresIn: response.expires_in,
            email,
            userid,
            name,
          })
        );
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: response.access_token,
            expiresIn: response.expires_in,
            email,
            userid,
            name,
          })
        );
        if (previousPath === SIGNIN || previousPath === SIGNUP || previousPath === GUESTTRACKORDER || previousPath === ORDERS) {
          history.push(LANDING);
        } else if (history.location.pathname !== CHECKOUT) {
          history.goBack();
        }
      }
    } catch (error) {
      onError(error.message);
      dispatch(loginFailed(error.message));
    }
};

export const authCheckState = (dispatch) => {
  try {
    const user = localStorage.getItem("user");
    if (user) {
      const userDetails = JSON.parse(user);
      dispatch(loginSuccess(userDetails));
    } else {
      dispatch(userLogout());
    }
  } catch (error) {
    dispatch(userLogout());
  }
};
