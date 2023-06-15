import * as yup from "yup";

export const createAccountValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'No se permiten números')
    .required('El nombre es obligatorio'),
  email: yup
    .string()
    .email('El email no es válido')
    .required('El correro es obligatorio'),
  password: yup
    .string()
    .min(5, 'Muy corta')
    .max(1000, 'Muy larga!')
    .required('Se necesita una contraseña'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Este campo es obligatorio'),
})