import { VALIDATIONS } from "./validations";

export const TRANSLATIONS_EN = {
  Navbar: {
    Home: "Home",
    Orders: "Orders",
    ContactUS: "Contact Us",
    Products: "Products",
    TrackOrder: "Track Order",
    SignOut: "SignOut",
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
      Email: "Email",
      Password: "Password",
      ConfirmPassword: "Confirm password",
      MobileNumber: "Mobile Number",
      SignUp: "Sign Up",
    },
    Validations: VALIDATIONS.SignUp,
  },
  AddToCart: {
    AllCategories: "All Categories",
    AddToCart: "Add To Cart",
    Quantity: "Quantity",
    Price: "Price",
    Unit: "Unit",
    Item: "Item",
    Action: "Action",
    None: "None",
    InputFields: {
      Quantity: "Enter Quantity",
      GoToCart: "Go to Cart",
    },
    Validations: {
      EnterQuantity: "Quantity Required",
    },
  },
  Cart: {
    Text1: "Items in your cart",
    Price: "Price",
    Subtotal: "Subtotal",
    Items: "Items",
    Kwd: "KWD",
    CartSummary: "Cart Summary",
    TotalPrice: "Total Price",
    PlaceOrder: "Place Order",
  },
  Checkout: {
    Checkout: "Checkout",
    Shipping: "Shipping",
    PaymentMethod: "Payment Method",
    AsGuest: "As Guest",
    AsMember: "As Member",
    Register: "Register",
    Pickup: "Pickup",
    Delivery: "Delivery",
    SelectDeliveryType: "Select Delivery Type",
    PickupDate: "Pickup Date:",
    DeliveryDate: "Delivery Date:",
    PaymentOnDelivery: "Payment On Delivery",
    CheckoutUsingKNET: "Checkout Using KNET",
    SelectPaymentType: "Select Payment Type",
    Next: "Next",
    OrderDetails: "Order Details",
    Qty: "Qty.",
    Sum: "Sum",
    TotalQuantity: "Total Quantity",
    ShippingCharges: "Shipping Charges",
    Total: "Total",
  },
  Shipping: {
    InputFields: {
      Area: "Area",
      ChooseArea: "Choose Area",
      Block: "Block",
      Street: "Street/Avenue",
      Plot: "Plot",
    },
    Validations: VALIDATIONS.Shipping,
  },
  ForgotPassword: {
    InputFields: {
      ForgotPassword: "Forgot Password",
      EmailAddress: "Email Address",
      SendLink: "Send Link",
    },
    Validations: {
      EmailRequired: "Email Required!",
    },
    Alerts: {
      Alert1: "Mail Sent Successfuly!",
      Alert2: "We didn't find an account for this e-mail address.",
      Alert3: "Invalid Email Address!",
    },
  },
  ResetPassword: {
    InputFields: {
      NewPassword: "New Password",
      ConfirmPassword: "Confirm Password",
      ResetPassword: "Reset Password",
    },
    Validations: {
      NewPassword: "New Password Required!",
      ConfirmPassword: "Confirm Password Required!",
      PasswordNotMatched: "Confirm Password Not matched with new password",
    },
    Alerts: {
      Alert1: "Could not find password reset token",
      Alert2: "Reset Mail has expired, please request a new password reset!",
      Alert3: "Password Reset Token Not Matched",
      Alert4: "Reset Password Mail was not Sent, for this mail",
      Alert5: "Password Set Successfuly!",
    },
  },
  PageNotFound: {
    Text1: "404: The page you are looking for isn’t here",
    Text2:
      "You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation",
    Button: "Go to Home Page",
  },
  TrackOrder: {
    Text: "Track Order",
    InputFields: {
      OrderTrackId: "Order Track Id",
      Submit: "Submit",
    },
    Validations: {
      OrderTrackId: "Order Track Id Required!",
    },
  },
  PaymentFailed: {
    PaymentDetails: "Payment Details",
    Status: "Status",
    PaymentId: "Payment Id",
    ReferenceNumber: "Reference Number",
    Amount: "Amount",
  },
  PaymentSuccess: {
    OrderId: "Order Id",
    OrderDate: "Order Date",
    TrackId: "Track Id",
    PaymentType: "Payment Type",
  },
};
