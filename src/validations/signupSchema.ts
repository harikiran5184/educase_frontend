import * as Yup from "yup";

export const signupSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Minimum 3 characters")
    .required("Full Name is required"),

  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid phone number")
    .required("Phone Number is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .required("Password is required"),

  companyName: Yup.string().required(
    "Company Name is required"
  ),

  agency: Yup.string().required(
    "Please select an option"
  ),
});