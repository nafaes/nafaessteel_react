import { getUserDetails, logIn } from "../../services/auth";
import {
  ACCOUNT_VERIFY,
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

const CryptoJS = require("crypto-js");

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

export const accountVerify = (message) => {
  return {
    type: ACCOUNT_VERIFY,
    payload: message,
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
      console.log(response,"loginDetails")
    
      if (response.isverified === false){
         
          onError("Account Is not verified");
          dispatch(accountVerify("Account Is not verified"));
      }

      else{

        const userPassword = CryptoJS.AES.encrypt(JSON.stringify(password), 'my-secret-key@123').toString();
        console.log(userPassword);
  
        localStorage.setItem("user",
          JSON.stringify({
            token: response.access_token,
            expiresIn: response.expires_in,
            email,
            userPass:userPassword,
            isVerified: response.isverified,
          })
        );
        
        if (response) {
          const { userid, name } = await getUserDetails(email);
          dispatch(
            loginSuccess({
              token: response.access_token,
              expiresIn: response.expires_in,
              email,
              userid,
              name,
              isVerified: response.isverified,
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
              userPassword:userPassword,
              isVerified: response.isverified,
            })
          );
        
          if (previousPath === SIGNIN || previousPath === SIGNUP || previousPath === GUESTTRACKORDER || previousPath === ORDERS) {
            history.push(LANDING);
          } else if (history.location.pathname !== CHECKOUT) {
            history.goBack();
          }
        }
      }
      //ENCRYPT
     
    } catch (error) {
      console.log(error);
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
