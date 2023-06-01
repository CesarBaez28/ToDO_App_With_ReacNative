import React from "react";
import theme from "../theme";
import { View, StyleSheet } from 'react-native'
import StyleTextInput from "./StyledTextInput";
import StyledText from "./StyledText"
import ButtonPrimary from "./ButtonPrimary";
import { SelectList } from 'react-native-dropdown-select-list'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    marginTop: 20,
    marginHorizontal: 20
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
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  },
  selectList: {
    backgroundColor: 'white',
    borderWidth: 0,
    marginTop: 3,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})

export default function ModalEditTask({ }) {

  const [selected, setSelected] = React.useState("");

  const data = [
    { key: '1', value: 'Completado'},
    { key: '2', value: 'No completado' },
  ]

  return (
    <View style={styles.container}>
      <StyledText fontSize={'subheading'} fontWeight={'bold'} aling={'center'}>Editar tarea</StyledText>

      <View style={styles.inputContainer}>
        <StyledText>Título</StyledText>
        <StyleTextInput style={styles.input} />

        <StyledText>Estado</StyledText>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
          defaultOption={data[0]}
          search = {false}
          boxStyles={styles.selectList}
          dropdownStyles ={{backgroundColor: "white"}}
        />

        <ButtonPrimary style={styles.button}>
          <StyledText color={'white'} style={styles.text}>Guardar</StyledText>
        </ButtonPrimary>
      </View>
    </View>
  )
}