import { VALIDATIONS } from "./validations";

export const TRANSLATIONS_AR = {
  Navbar: {
    Home: "الصفحة الرئيسية",
    Orders: "اتصل بنا",
    ContactUS: "اتصل بنا",
    Products: "منتجات",
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
      SignUp: "اشتراك",
    },
    Validations: VALIDATIONS.SignUp,
  },
  Cart: {
    Text1: "الوحدات الموجودة فى سلة التسوق الخاصة بك",
    Price: "سعر",
    Subtotal: "المجموع الفرعي",
    Items: "العناصر",
    Kwd: "دينار كويتي",
    CartSummary: "ملخص العربة",
    TotalPrice: "السعر الكلي",
    PlaceOrder: "مكان الامر",
  },
  Checkout: {
    Checkout: "الدفع",
    Shipping: "شحن",
    PaymentMethod: "طريقة الدفع او السداد",
    AsGuest: "كضيف",
    AsMember: "كعضو",
    Register: "يسجل",
    Pickup: "يلتقط",
    Delivery: "توصيل",
    SelectDeliveryType: "حدد نوع التسليم",
    PickupDate: "اختر تاريخا:",
    DeliveryDate: "تاريخ التسليم او الوصول:",
    PaymentOnDelivery: "دفع على تسليم",
    CheckoutUsingKNET: "الخروج عن طريق كي نت",
    SelectPaymentType: "اختر طريقة الدفع",
    Next: "التالي",
    OrderDetails: "تفاصيل الطلب",
    Qty: "الكمية.",
    Sum: "مجموع",
    TotalQuantity: "الكمية الإجمالية",
    ShippingCharges: "رسوم الشحن",
    Total: "المجموع",
  },
  Shipping: {
    InputFields: {
      Area: "منطقة",
      ChooseArea: "اختر المنطقة",
      Block: "حاجز",
      Street: "الشارع",
      Plot: "قطعة",
    },
    Validations: VALIDATIONS.Shipping,
  },
  ForgotPassword: {
    InputFields: {
      ForgotPassword: "هل نسيت كلمة المرور",
      EmailAddress: "عنوان البريد الالكترونى",
      SendLink: "أرسل الرابط",
    },
    Validations: {
      EmailRequired: "البريد الإلكتروني (مطلوب",
    },
    Alerts: {
      Alert1: "تم إرسال البريد بنجاح!",
      Alert2: "لم نعثر على حساب لعنوان البريد الإلكتروني هذا.",
      Alert3: "بريد إلكتروني خاطئ تبوك",
    },
  },
  ResetPassword: {
    InputFields: {
      NewPassword: "كلمة مرور جديدة",
      ConfirmPassword: "تأكيد كلمة المرور",
      ResetPassword: "إعادة تعيين كلمة المرور",
    },
    Validations: {
      NewPassword: "مطلوب كلمة مرور جديدة!",
      ConfirmPassword: "مطلوب تأكيد كلمة المرور!",
    },
    Alerts: {
      Alert1: "تعذر العثور على رمز إعادة تعيين كلمة المرور",
      Alert2:
        "انتهت صلاحية إعادة تعيين البريد ، يرجى طلب إعادة تعيين كلمة مرور جديدة",
      Alert3: "رمز إعادة تعيين كلمة المرور غير مطابق",
      Alert4: "إعادة تعيين كلمة المرور لم يتم إرسال بريد ، لهذا البريد",
      Alert5: "تم تعيين كلمة المرور بنجاح!",
    },
  },
};
