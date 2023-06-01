import React from "react";
import { View, StyleSheet } from 'react-native'
import StyleTextInput from "./StyledTextInput";
import StyledText from "./StyledText"
import ButtonPrimary from "./ButtonPrimary";

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

export default function ModalShareTask({ }) {
  return (
    <View style={styles.container}>
      <StyledText fontSize={'subheading'} fontWeight={'bold'} aling={'center'}>Compartir tarea</StyledText>
      <StyledText style={styles.text} fontSize={'subheading'} fontWeight={'bold'} aling={'center'}>"Nombre de la tarea"</StyledText>

      <StyledText style={styles.description}>
       Entre el correo del usuario con quien quieres compartir tu tarea. 
       Comparte una tarea con alguien y manténganse sincronizados con sus metas cada día.
      </StyledText>

      <View style={styles.inputContainer}>
        <StyleTextInput placeholder={'Ingrese el correo del usuario'} style={styles.input} />
        <ButtonPrimary style={styles.button}>
          <StyledText color={'white'}>Compartir</StyledText>
        </ButtonPrimary>
      </View>
    </View>
  )
}