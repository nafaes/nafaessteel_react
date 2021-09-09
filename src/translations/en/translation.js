import { VALIDATIONS } from "./validations";

export const TRANSLATIONS_EN = {
  Navbar: {
    Home: "Home",
    Orders: "Orders",
    ContactUS: "Contact Us",
  },
  SignIn: {
    InputFields: {
      Email: "Email",
      Password: "Password",
      SignIn: "Sign In",
      SignUp: "Sign Up",
      ForgotPassword: "Forgot Password",
      DontHaveAccount: "Don't have account",
    },
    Validations: VALIDATIONS.SignIn,
    Alerts: {
      Alert1: "Invalid Credentials",
      Alert2: "Failed to Connect",
    },
  },
  SignUp: {
    InputFields: {
       Name: "Name",
       ConfirmPassword: "Confirm Password",
       MobileNumber: "Mobile Number",
    }
  },
};
