import React from "react";
import { TextInput, StyleSheet, View, KeyboardAvoidingView } from "react-native";
import theme from "../theme";
import { Ionicons } from '@expo/vector-icons';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  textInput: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: theme.inputAddTask.paddingVertical,
    marginBottom: theme.inputAddTask.marginBottom,
    backgroundColor: theme.inputAddTask.backgroundColor,
    color: theme.inputAddTask.color,
    width: '88%',
    height: 50
  },
  error: {
    borderColor: theme.textInputError.borderColor
  },
  iconContainer: {
    marginBottom: 10,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: "#2193B0",
    paddingLeft: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const InputAddTask = ({ style = {}, error, ...props }) => {
  const inputStyle = [
    styles.textInput,
    style,
    error && styles.error
  ]

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons name="add-outline" size={36} color="white" />
        </View>
        <TextInput style={inputStyle} {...props} />
      </View>
    </KeyboardAvoidingView>
  )
}

export default InputAddTask