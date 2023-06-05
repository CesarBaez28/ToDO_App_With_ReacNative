import React from "react";
import { TextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  textInput: {
    borderRadius: theme.textInput.borderRadius,
    borderWidth: theme.textInput.borderWidth,
    borderColor: theme.textInput.borderColor,
    paddingHorizontal: theme.textInput.paddingHorizontal,
    paddingVertical: theme.textInput.paddingVertical,
    marginBottom: theme.textInput.marginBottom,
    backgroundColor: theme.colors.white
  },
  error: {
    borderColor: theme.textInputError.borderColor
  }
})

const StyleTextInput = ({style = {}, value,onChangeText, placeholder, error, ...props}) => {
  const inputStyle = [
    styles.textInput,
    style,
    error && styles.error
  ]
 
  return <TextInput onChangeText={onChangeText} value={value} placeholder= {placeholder} style={inputStyle} {...props} />
}

export default StyleTextInput