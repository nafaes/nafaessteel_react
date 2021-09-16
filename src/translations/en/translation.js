import { VALIDATIONS } from "./validations";

export const TRANSLATIONS_EN = {
  Navbar: {
    Home: "Home",
    Orders: "Orders",
    ContactUS: "Contact Us",
    Products: "Products",
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
  Cart: {
    Text1: "Items in your cart",
    Price: "Price",
    Subtotal: "Subtotal",
    Items: "items",
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
  }
};
