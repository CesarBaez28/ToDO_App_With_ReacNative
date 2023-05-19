import React from "react"
import { StyleSheet, TouchableOpacity } from 'react-native'
import theme from '../theme.js'

const styles = StyleSheet.create({
  button: {
    elevation: theme.buttonPrimary.elevation,
    borderRadius: theme.buttonPrimary.borderRadius,
    paddingVertical: theme.buttonPrimary.paddingVertical,
    backgroundColor: theme.buttonPrimary.backgroundColor
  },
  alingCenter: {
    alignItems: 'center'
  },
  marginHorizontal: {
    marginHorizontal: theme.buttonPrimary.marginHorizontal
  }
})

const ButtonPrimary = ({aling, children, margin, style, ...props}) => {
  const buttonStyle = [
    styles.button,
    aling == 'center' && styles.alingCenter,
    margin == 'horizontal' && styles.marginHorizontal,
    style
  ]

  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      {children}
    </TouchableOpacity>
  )
}

export default ButtonPrimary