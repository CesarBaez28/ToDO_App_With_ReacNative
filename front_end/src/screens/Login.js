import react from "react";
import { Formik, useField } from "formik";
import { Button, View, TextInput, StyleSheet } from "react-native";
import StyledText from "../components/StyledText";
import StyleTextInput from "../components/StyledTextInput";
import {loginValidationSchema} from "../ValidationsSchemas/login"

const initialValues = {
  email: "",
  password: ""
}

export default function LoginScreen () {

  return(
    <Formik validationSchema={loginValidationSchema} initialValues={initialValues} 
    onSubmit={values => console.log(values)}>

    </Formik>
  )
}