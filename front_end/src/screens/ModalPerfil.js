import React from "react";
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import StyledText from "../components/StyledText";
import StyleTextInput from "../components/StyledTextInput";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    marginTop: 10,
    marginLeft: theme.profile.marginLeft,
    flexDirection: theme.profile.flexDirection,
    justifyContent: theme.profile.justifyContent,
    borderRadius: theme.profile.borderRadius,
    backgroundColor: theme.colors.white,
    width: 66,
    height: 66,
    alignItems: 'center'
  },
  profileDescription: {
    marginTop: 10,
     marginBottom: 30 
  },
  profileContainer: {
    alignItems: 'center'
  },
  inputContainer: {
    marginHorizontal: 20
  },
  input: {
    borderWidth: 0,
    marginTop: 3,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  logout: {
    color: 'red'
  },
  inputLogout: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginTop: 30,
    padding: 10
  }
})

export default function ModalPerfil({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.profileContainer}>
        <View style={styles.profile} >
          <StyledText fontSize={'heading2'} aling={'center'}>CB</StyledText>
        </View>
      </View>

      <View style={styles.profileDescription}>
        <StyledText fontSize={'heading2'} aling={'center'}>César Báez</StyledText>
        <StyledText color={'gray'} aling={'center'}>Baezcesar329@gmail.com</StyledText>
      </View>

      <View style={styles.inputContainer}>
        <StyledText fontSize={'subheading'}>Nombre</StyledText>
        <StyleTextInput placeholder={'César Báez'} style={styles.input} />
      </View>

      <TouchableOpacity style={styles.inputLogout}>
        <StyledText style={styles.logout}>Cerrar sesión</StyledText>
      </TouchableOpacity>

    </View>
  );
}