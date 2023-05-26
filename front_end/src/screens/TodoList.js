import { View, StyleSheet, TouchableOpacity, Animated, Text } from "react-native";
import StyledText from "../components/StyledText";
import GradiantBackground from "../components/GradientBackground";
import Constants from 'expo-constants';
import Heading from "../components/Heading";
import Tasks from "../components/TaskS";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1
  },
  title: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10
  },
})

const tareas = [
  {
    id: 1,
    title: "Hacer ejercicio"
  },
  {
    id: 2,
    title: "Ir de compras"
  },
  {
    id: 3,
    title: "Coordinar proyecto"
  }
]

export default function TodoList() {

  const [listData, setListData] = useState(
    tareas.map((items, index) => ({
      key: `${items.id}`,
      title: items.title
    }))
  )

  return (
    <GradiantBackground>
      <View style={styles.container}>

        <Heading />

        <StyledText
          style={styles.title}
          fontWeight={'bold'}
          color={'white'}
          fontSize={'heading2'}
        >Lista de tareas</StyledText>

        <Tasks />
 
      </View>
    </GradiantBackground>
  )
}


/*
        <View style = {styles.containerTask}>
          <TouchableOpacity style={styles.task}>

            <TouchableOpacity style={styles.circle}>
            </TouchableOpacity>

            <View style ={styles.text}>
              <StyledText>Comprar comida </StyledText>
            </View>

            <TouchableOpacity style={styles.iconRigth}>
              <Entypo name="share-alternative" size={18} color="black" />
            </TouchableOpacity>

          </TouchableOpacity>
        </View>

*/