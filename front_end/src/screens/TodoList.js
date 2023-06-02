import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import StyledText from "../components/StyledText";
import InputAddTask from "../components/InputAddTask";
import GradiantBackground from "../components/GradientBackground";
import Heading from "../components/Heading";
import Tasks from "../components/Tasks";
import {BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { getTasks } from '../api';

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

export default function TodoList({ navigation }) {

  const [listTasks, setTasks] = getTasks(1);

  return (
    <GradiantBackground>
      <BottomSheetModalProvider>
        <SafeAreaView style={styles.container}>

          <Heading navigation={navigation} />

          <StyledText
            style={styles.title}
            fontWeight={'bold'}
            color={'white'}
            fontSize={'heading2'}
          >Lista de tareas</StyledText>

          <Tasks tasks={listTasks} setTasks={setTasks}/>

          <InputAddTask />
          
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GradiantBackground>
  )
}