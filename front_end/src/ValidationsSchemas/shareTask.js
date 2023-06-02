import * as yup from "yup";

export const shareTaskValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Email is required')
})