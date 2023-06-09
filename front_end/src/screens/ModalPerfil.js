import React, {useState} from "react";
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import StyledText from "../components/StyledText";
import StyleTextInput from "../components/StyledTextInput";
import theme from "../theme";
import { getUserDataForComponents, getInitials, logout } from "../asyncStorage";
import { updateUser } from "../api";

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

export default function ModalPerfil({ navigation, route}) {

  const [user, setUser] = getUserDataForComponents();
  const [inputValue, setInputValue] = useState('');
  const setUserHeading = route.params.setUser;

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleOnSubmitEditing = () => {
    if (inputValue != '') {
      updateUser(user.id, inputValue, setUser, setUserHeading);
    }
    setInputValue('');    
  };

  if (user) {

    const initials = getInitials(user.name);

    return (
      <View style={styles.container}>

        <View style={styles.profileContainer}>
          <View style={styles.profile} >
            <StyledText fontSize={'heading2'} aling={'center'}>{initials}</StyledText>
          </View>
        </View>

        <View style={styles.profileDescription}>
          <StyledText fontSize={'heading2'} aling={'center'}>{user.name}</StyledText>
          <StyledText color={'gray'} aling={'center'}>{user.email}</StyledText>
        </View>

        <View style={styles.inputContainer}>
          <StyledText fontSize={'subheading'}>Nombre</StyledText>
          <StyleTextInput 
            value={inputValue}
            onChangeText={handleInputChange}
            onSubmitEditing={handleOnSubmitEditing}
            placeholder={user.name} style={styles.input} 
          />
        </View>

        <TouchableOpacity onPress={()=> logout(navigation) } style={styles.inputLogout}>
          <StyledText style={styles.logout}>Cerrar sesión</StyledText>
        </TouchableOpacity>

      </View>
    );
  }
}