import React from "react";
import { View, StyleSheet } from 'react-native'
import StyleTextInput from "./StyledTextInput";
import StyledText from "./StyledText"
import ButtonPrimary from "./ButtonPrimary";
import { Formik } from "formik";
import FormikInputValue from "../components/FormikInputValue";
import { shareTaskValidationSchema } from "../ValidationsSchemas/shareTask";
import { shareTask } from "../api";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    marginTop: 10,
    marginHorizontal: 20
  },
  input: {
    borderWidth: 0,
    marginTop: 3,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  },
  text: {
    marginTop: 15
  },
  description: {
    marginTop: 12,
    textAlign: 'justify',
    marginHorizontal: 20,
  }
})

const initialValue = {
  email: ""
}

export default function ModalShareTask({idUser, idTask, nameTask, closeModal}) {
  return (
    <Formik validationSchema={shareTaskValidationSchema} initialValues={initialValue}
      onSubmit={(values, {resetForm}) => shareTask(idUser, idTask, nameTask, values.email, resetForm, closeModal)}
      
    >
      {({handleSubmit}) => {
        return (
          <View style={styles.container}>
            <StyledText fontSize={'subheading'} fontWeight={'bold'} aling={'center'}>Compartir tarea</StyledText>
            <StyledText style={styles.text} fontSize={'subheading'} fontWeight={'bold'} aling={'center'}>"{nameTask}"</StyledText>

            <StyledText style={styles.description}>
              Entre el correo del usuario con quien quieres compartir tu tarea.
              Comparte una tarea con alguien y manténganse sincronizados con sus metas cada día.
            </StyledText>

            <View style={styles.inputContainer}>
              <FormikInputValue
                style={styles.input}
                name='email'
                placeholder='Ingrese el correo de su contacto'
              />
              <ButtonPrimary onPress={handleSubmit} style={styles.button}>
                <StyledText color={'white'}>Compartir</StyledText>
              </ButtonPrimary>
            </View>
          </View>
        )
      }}
    </Formik>
  )
}