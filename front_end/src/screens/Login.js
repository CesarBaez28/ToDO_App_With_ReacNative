import react from "react";
import { Formik, useField } from "formik";
import { Button, View, TextInput, StyleSheet } from "react-native";
import StyledText from "../components/StyledText";
import StyleTextInput from "../components/StyledTextInput";

const initialValues = {
  email: "",
  password: ""
}

export default function LoginScreen () {

  return(
    <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>

    </Formik>
  )
}