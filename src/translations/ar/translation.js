import { VALIDATIONS } from "./validations";

export const TRANSLATIONS_AR = {
  Navbar: {
    Home: "الصفحة الرئيسية",
    Orders: "اتصل بنا",
    ContactUS: "اتصل بنا",
  },
  SignIn: {
    InputFields: {
      Email: "بريد الالكتروني",
      Password: "كلمه المرور",
      SignIn: "تسجيل الدخول",
      SignUp: "اشتراك",
      ForgotPassword: "نسيت كلمة المرور",
      DontHaveAccount: "ليس لديك حساب",
    },
    Validations: VALIDATIONS.SignIn,
    Alerts: {
      Alert1: "بيانات الاعتماد غير صالحة",
      Alert2: "تعذر الاتصال",
    },
  },
  SignUp: {
    InputFields: {
      Name: "اسم",
      Email: "بريد الالكتروني",
      Password: "كلمه السر",
      ConfirmPassword: "تأكيد كلمة المرور",
      MobileNumber: "رقم الهاتف المحمول",
      SignUp: "اشتراك"
    },
    Validations: VALIDATIONS.SignUp,
  }
};
