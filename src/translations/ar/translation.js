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
};
