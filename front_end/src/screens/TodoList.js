import { View, StyleSheet, TouchableOpacity, Animated, Text } from "react-native";
import StyledText from "../components/StyledText";
import GradiantBackground from "../components/GradientBackground";
import Constants from 'expo-constants';
import theme from "../theme";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import Heading from "../components/Heading";
import { SwipeListView } from 'react-native-swipe-list-view'
import { useState } from "react";

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
  containerTask: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    marginBottom: 5,
    borderRadius: 8
  },
  task: {
    height: 50,
    marginHorizontal: 10,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: '50%',
    borderColor: "#848484",
    borderWidth: 2,
    marginRight: 10
  },
  text: {
    maxWidth: '80%',
    overflow: 'scroll'
  },
  iconRigth: {
    marginLeft: 'auto',
  },
  itemRigth: {
    width: 80,
    height: 50,
    marginLeft: 'auto',
    marginRight: 10,
    backgroundColor: 'red',
    padding: 15,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8
  }
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

        <SwipeListView
          data={listData}
          renderItem={(data, rowMap) => (

            <View style={styles.containerTask}>
              <TouchableOpacity style={styles.task}>

                <TouchableOpacity style={styles.circle}>
                </TouchableOpacity>

                <View style={styles.text}>
                  <StyledText>{data.item.title} </StyledText>
                </View>

                <TouchableOpacity style={styles.iconRigth}>
                  <Entypo name="share-alternative" size={18} color="black" />
                </TouchableOpacity>

              </TouchableOpacity>
            </View>

          )}
          renderHiddenItem= {(data, rowMap) => (
            <View style = {styles.itemRigth}>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <Feather name="trash-2" size={20} color="white" />
              </TouchableOpacity>
            </View>
          )}
          rightOpenValue={-75}
        />
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