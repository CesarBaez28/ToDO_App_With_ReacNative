import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet  } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  firstColor: {
    color: '#2193b0'
  },
  secondColor: {
    color: '#6dd5ed'
  },
  container: {
    flex: 1
  }
})

const GradiantBackground = ({colors, children, style, ...props}) => {
  const gradiantStyle = [
    styles.container,
    style
  ]

  return (
    <LinearGradient
    colors={colors || [styles.firstColor.color, styles.secondColor.color]}
    style={gradiantStyle}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  )
}

export default GradiantBackground
