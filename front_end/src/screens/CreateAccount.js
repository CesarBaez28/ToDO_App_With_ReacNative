import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StyledText from "../components/StyledText";
import { Formik } from "formik";
import { createAccountValidationSchema } from "../ValidationsSchemas/createAccount";
import FormikInputValue from "../components/FormikInputValue";
import ButtonPrimary from "../components/ButtonPrimary";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 15
  },
  input: {
    borderWidth: 0,
    marginTop: 3,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
  }
})

const initialValues = {
  name: "",
  email: "",
  password: ""
}

export default function CreateAccount({ }) {

  const handleCreateAccount = (values) => {
    console.log(values);
  }

  return (
    <Formik validationSchema={createAccountValidationSchema} initialValues={initialValues}
      onSubmit={values => handleCreateAccount(values)} >

      {({ handleSubmit }) => {
        return (
          <View style={styles.container}>

            <StyledText>Nombre: </StyledText>
            <FormikInputValue
              style={styles.input}
              name={'name'}
              placeholder='Escriba su nombre completo'
            />

            <StyledText>Email: </StyledText>
            <FormikInputValue
              style={styles.input}
              name='email'
              placeholder='example@outlook.com'
            />

            <StyledText>Contraseña: </StyledText>
            <FormikInputValue
              style={styles.input}
              name='password'
              placeholder = 'Escriba su contraseña'
              secureTextEntry
            />

           <StyledText>Confirmar la contraseña: </StyledText>
            <FormikInputValue
              style={styles.input}
              name='confirmPassword'
              placeholder = 'Repita su contraseña'
              secureTextEntry
            /> 

            <ButtonPrimary onPress={handleSubmit} style={styles.button}>
              <StyledText color={'white'}>Crear nueva cuenta</StyledText>
            </ButtonPrimary>

          </View>
        )
      }}
    </Formik>
  )
}
