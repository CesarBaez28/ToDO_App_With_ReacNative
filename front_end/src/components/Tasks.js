import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view'
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    marginHorizontal: 10,
    marginBottom: 5,
    borderRadius: 8
  },
  task: {
    height: 50,
    marginHorizontal: 10,
    backgroundColor: theme.colors.white,
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

export default function Tasks() {

  const [listData, setListData] = useState(
    tareas.map((items, index) => ({
      key: `${items.id}`,
      title: items.title
    }))
  )

  return (
    <SwipeListView
      data={listData}
      renderItem={(data, rowMap) => (

        <View style={styles.container}>
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
      renderHiddenItem={(data, rowMap) => (
        <View style={styles.itemRigth}>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Feather name="trash-2" size={20} color="white" />
          </TouchableOpacity>
        </View>
      )}
      rightOpenValue={-75}
    />
  )
}