import { View, StyleSheet, SafeAreaView, TouchableOpacity, Animated, Text, KeyboardAvoidingView, Platform } from "react-native";
import StyledText from "../components/StyledText";
import InputAddTask from "../components/InputAddTask";
import GradiantBackground from "../components/GradientBackground";
import Heading from "../components/Heading";
import Tasks from "../components/Tasks";


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10
  },
  input: {
    borderRadius: 8,
    marginHorizontal: 10,
    backgroundColor: "#2193B0",
    borderColor: "#2193B0",
    color: 'white',
    opacity: 0.7
  }
})

export default function TodoList() {
  return (
    <GradiantBackground>
      <SafeAreaView style={styles.container}>

        <Heading />

        <StyledText
          style={styles.title}
          fontWeight={'bold'}
          color={'white'}
          fontSize={'heading2'}
        >Lista de tareas</StyledText>

        <Tasks />

        <InputAddTask />

      </SafeAreaView>
    </GradiantBackground>
  )
}