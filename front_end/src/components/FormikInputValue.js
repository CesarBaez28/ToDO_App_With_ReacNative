import StyledText from "./StyledText";
import { useField } from "formik";
import { StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  error: {
    color: theme.inputValueError.color,
    fontSize: theme.inputValueError.fontSize,
    marginBottom: theme.inputValueError.marginBottom,
    marginTop: theme.inputValueError.marginTop
  }
})

const FormikInputValue = ({name, ...props}) => {
  const [field, meta, helpers] = useField(name)

  return (
    <>
      <StyleTextInput 
        error={meta.error}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}> {meta.error} </StyledText>}
    </>
  )
}

export default FormikInputValue
