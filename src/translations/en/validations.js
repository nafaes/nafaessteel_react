export const VALIDATIONS = {
  SignIn: {
    Email: "Email Required!",
    ValidEmail: "Not a valid Email",
    EmailMax: "Email is too long (Maximum {{ length }} characters allowed)",
    Password: "Password Required!",
    PasswordMin:
      "Password is too short (Minimum {{ length }} characters needed)",
    PasswordMax:
      " Password is too long (Maximum {{ length }} characters allowed.)",
  },
  SignUp: {
    Name: "Name Required",
    NameMin: "Name is too short (Minimum {{ length }} characters required)",
    NameMax: "Name is too long (Maximum {{ length }} characters allowed)",
    Password: "Password Required!",
    ValidPassword:
      "Must contain one number, one uppercase and lowercase letter, one special character, and at least 8 characters",
    PasswordMax:
      "Password is too long (Maximum {{ length }} characters allowed.)",
    PasswordMin:
      "Password is too short (Minimum {{ length }} characters needed.)",
    ConfirmPassword: "Confirm Password Required!",
    PasswordNotMatched: "Confirm Password Not matched with password",
    MobileNumber: "Mobile Number Required!",
    NotValidMobileNumber: "Mobile Number Should not contain All Zeros",
    ValidMobileNumber: "Mobile Number must contain (8 digits.)",
  },
  Shipping: {
    Area: "Area required!",
    Block: "Block required!",
    Street: "Street required!",
    Plot: "Plot required!",
  },
};
