import { View, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "../components/StyledText";
import GradiantBackground from "../components/GradientBackground";
import Constants from 'expo-constants';
import theme from "../theme";
import { Entypo } from '@expo/vector-icons';
import Heading from "../components/Heading";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1
  }
})

export default function TodoList() {
  return (
    <GradiantBackground>
      <View style={styles.container}>
        <Heading />
      </View>
    </GradiantBackground>
  )
}