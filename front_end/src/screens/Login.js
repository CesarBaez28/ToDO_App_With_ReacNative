import react from "react";
import { Formik } from "formik";
import {View, StyleSheet } from "react-native";
import StyledText from "../components/StyledText";
import FormikInputValue from "../components/FormikInputValue";
import ButtonPrimary from "../components/ButtonPrimary";
import { loginValidationSchema } from "../ValidationsSchemas/login"
import theme from "../theme";
import { LinearGradient } from 'expo-linear-gradient';
import GradiantBackground from "../components/GradientBackground";

const initialValues = {
  email: "",
  password: ""
}

const styles = StyleSheet.create({
  form: {
    marginTop: theme.form.marginTop,
    marginHorizontal: theme.form.marginHorizontal,
  },
  containerText: {
    marginBottom: 5
  },
  container: {
    flex: 1
  }
})

export default function LoginScreen() {
  return <>
    <GradiantBackground>
      <Formik validationSchema={loginValidationSchema} initialValues={initialValues}
        onSubmit={values => console.log(values)}>

        {({ handleSubmit }) => {
          return (
            <View style={styles.form}>

              <View style={{marginBottom: 20}}>
                <StyledText style={styles.containerText} color='white' aling='center' fontSize='heading'>
                  Todo App
                </StyledText>
                <StyledText aling='center' color='secondary'>
                  Sign in to your account
                </StyledText>
              </View>

              <FormikInputValue
                name='email'
                placeholder='example@outlook.com'
              />
              <FormikInputValue
                name='password'
                placeholder='Password'
                secureTextEntry
              />

              <View>
                <StyledText aling='center' color='secondary'>
                  Forgot your password?
                </StyledText>
              </View>

              <View style={{marginTop: 40}}>
                <ButtonPrimary aling='center' margin='horizontal'>
                  <StyledText color={'white'}>Log in</StyledText>
                </ButtonPrimary>
              </View>

              <View style={{marginTop: 20}}>
                <StyledText aling='center' color='secondary'>
                  Don't have an acount?
                </StyledText>
              </View>

            </View>
          )
        }}
      </Formik>

    </GradiantBackground>
  </>
}