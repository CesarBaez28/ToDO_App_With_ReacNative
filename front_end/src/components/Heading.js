import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";
import { Entypo } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center"
  },
  profile: {
    marginLeft: theme.profile.marginLeft,
    width: theme.profile.width,
    height: theme.profile.height,
    flexDirection: theme.profile.flexDirection,
    justifyContent: theme.profile.justifyContent,
    borderRadius: theme.profile.borderRadius,
    backgroundColor: theme.colors.white,
  },
  text: {
    marginLeft: 10
  },
  options: {
    marginLeft: 'auto',
    marginRight: 10
  }
})

export default function Heading() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profile}>
        <StyledText aling={'center'}>CB</StyledText>
      </TouchableOpacity>
      <StyledText fontSize={'subheading'} style={styles.text} color={'white'} fontWeight={'bold'}>César Báez</StyledText>
      <TouchableOpacity style={styles.options}>
        <Entypo name="dots-three-horizontal" size={18} color="white" />
      </TouchableOpacity>
    </View>
  )
}