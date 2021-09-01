export const isInputNumber = (event, maxLength) => {
  let input = String.fromCharCode(event.which);
  if (!new RegExp(/[0-9]/).test(input)) {
    event.preventDefault();
  }
  if (event.target.value === "0000") {
    event.preventDefault();
  }
  if (event.target.value.length >= maxLength) {
    event.preventDefault();
  }
};

export const limitMaxlength = (event, maxLength) => {
  if (event.target.value.length >= maxLength) {
    event.preventDefault();
  }
};

export const checkValidity = (value, rules) => {
  if (rules.isUserName) {
    let valid = true;
    let validationMsg = "";
    if (!value) {
      valid = false;
      validationMsg = "Name Required!";
    } else if (value.length < rules.minLength) {
      valid = false;
      validationMsg = `Name is too short (Minimum ${rules.minLength} characters needed.)`;
    } else if (value.length > rules.maxLength) {
      valid = false;
      validationMsg = `Name is too long (Maximum ${rules.maxLength} characters allowed.)`;
    }

    return {
      valid,
      validationMsg,
    };
  }

  if (rules.isMobileNo) {
    let valid = true;
    let validationMsg = "";
    if (!value) {
      valid = false;
      validationMsg = "Mobile Number Required!";
    } else if (value === "0000") {
      valid = false;
      validationMsg = "Mobile Number Should not contain All Zeros";
    } else if (value.length !== 8) {
      valid = false;
      validationMsg = "Mobile Number must contain (8 digits.)";
    }

    return {
      valid,
      validationMsg,
    };
  }

  if (rules.isEmail) {
    let valid = true;
    let validationMsg = "";
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (!value) {
      valid = false;
      validationMsg = { msg: "SignIn.Validations.Email", length: "" };
    } else if (!pattern.test(value)) {
      valid = false;
      validationMsg = { msg: "SignIn.Validations.ValidEmail", length: "" };
    } else if (value.length > rules.maxLength) {
      valid = false;
      validationMsg = {
        msg: "SignIn.Validations.EmailMax",
        length: rules.maxLength,
      };
    }

    return {
      valid,
      validationMsg,
    };
  }

  if (rules.isPassword) {
    let valid;
    let validationMsg;
    if (!value) {
      valid = false;
      validationMsg = "Password Required!";
    } else {
      if (rules?.isSignup) {
        // var lowerCaseAlphabetRegex = new RegExp("^(?=.*[a-z])");
        // var upperCaseAlphabetRegex = new RegExp("^(?=.*[A-Z])");
        // var numberRegex = new RegExp("^(?=.*[0-9])");
        // var specialCharRegex = new RegExp("^(?=.*[!@#%&])");
        // if (!lowerCaseAlphabetRegex.test(value)) {
        //   valid = false;
        //   validationMsg = "Must contain one lowercase letter!";
        // } else if (!upperCaseAlphabetRegex.test(value)) {
        //   valid = false;
        //   validationMsg = "Must contain one uppercase letter!";
        // } else if (!numberRegex.test(value)) {
        //   valid = false;
        //   validationMsg = "Must contain one number!";
        // } else if (!specialCharRegex.test(value)) {
        //   valid = false;
        //   validationMsg = "Must contain one special character!";
        // } else if (value.length > rules.maxLength) {
        //   valid = false;
        //   validationMsg = `Password is too long (Maximum ${rules.maxLength} characters allowed.)`;
        // } else if (value.length < rules.minLength) {
        //   valid = false;
        //   validationMsg = `Password is too short (Minimum ${rules.minLength} characters needed.)`;
        // }

        var strongRegex = new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})"
        );
        if (strongRegex.test(value)) {
          valid = true;
          validationMsg = "";
        } else {
          valid = false;
          validationMsg = `"Must contain one number, one uppercase and lowercase letter, one special character, and at least 8 characters",`;
        }

        if (strongRegex.test(value) && value.length > rules.maxLength) {
          valid = false;
          validationMsg = `Password is too long (Maximum ${rules.maxLength} characters allowed.)`;
        }
      } else {
        if (value.length > rules.maxLength) {
          valid = false;
          validationMsg = `Password is too long (Maximum ${rules.maxLength} characters allowed.)`;
        } else if (value.length < rules.minLength) {
          valid = false;
          validationMsg = `Password is too short (Minimum ${rules.minLength} characters needed.)`;
        }
      }
    }

    return {
      valid,
      validationMsg,
    };
  }

  if (rules.isConfirmPassword) {
    let valid = true;
    let validationMsg = "";
    if (!value) {
      valid = false;
      validationMsg = "Confirm Password Required!";
    } else {
      if (value.length > rules.maxLength) {
        valid = false;
        validationMsg = `Confirm Password is too long (Maximum ${rules.maxLength} characters allowed.)`;
      } else if (value.length < rules.minLength) {
        valid = false;
        validationMsg = `Confirm Password is too short (Minimum ${rules.minLength} characters needed.)`;
      }
    }

    return {
      valid,
      validationMsg,
    };
  }
};
