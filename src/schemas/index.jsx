import * as Yup from "yup";

export const loginSchema = Yup.object({
  name: Yup.string().min(2).max(25),
  email: Yup.string().email().required("Please enter email"),
  password: Yup.string().min(6).required("Please enter password"),
});

export default loginSchema;
