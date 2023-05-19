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
  colorWhite: {
    color: theme.colors.white
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
  heading: {
    fontSize: theme.fontSizes.heading
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
    color == 'white' && styles.colorWhite,
    fontSize == 'subheading' && styles.subheading,
    fontSize == 'heading' && styles.heading,
    fontWeight == 'bold' && styles.bold,
    style
  ]

  return (
    <Text style = {textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}

