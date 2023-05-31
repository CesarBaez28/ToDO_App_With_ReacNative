import React from "react";
import { Link } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import theme from '../theme.js'

const styles = StyleSheet.create({
  link: {
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
  colorBlue: {
    color: theme.colors.blue
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
  decorationLine: {
    textDecorationLine: 'underline'
  },
  marginRight: {
    marginRight: 10
  }
})

export default function StyledLink ({aling, to, children, color, margin, fontSize, fontWeight, decorationLine, style, ...restOfProps}){
  const linkStyles = [
    styles.link,
    aling == 'center' && styles.textAlingCenter,
    color == 'primary' && styles.colorPrimary,
    color == 'secondary' && styles.colorSecondary,
    color == 'white' && styles.colorWhite,
    color == 'blue' && styles.colorBlue,
    fontSize == 'subheading' && styles.subheading,
    fontWeight == 'bold' && styles.bold,
    decorationLine == 'underline' && styles.decorationLine,
    margin == 'right' && styles.marginRight
  ]

  return (
    <Link to={to} style = {linkStyles} {...restOfProps}>
      {children}
    </Link>
  ) 
}
