import React from "react"
import {Text, StyleSheet } from 'react-native'
import theme from '../theme.js'

const styles = StyleSheet.create ({
  text: {
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textPrimary
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textsecundary
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  textAlingCenter: {
    textAlign: 'center'
  },
})

export default function StyledText({aling, children, color, fontSize, fontWeight, style, ...restOfProps}){
  const textStyles = [
    styles.text,
    aling == 'center' && styles.textAlingCenter,
    color == 'primary' && styles.colorPrimary,
    color == 'secondary' && styles.colorSecondary,
    fontSize == 'susubheadingb' && styles.subheading,
    fontWeight == 'bold' && styles.bold,
    style
  ]

  return (
    <Text style = {textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}

