import React, { useState, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view'
import StyledText from "./StyledText";
import theme from "../theme";
import ModalEditTask from "./ModalEditTask";

import 'react-native-gesture-handler'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

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
  },
  {
    id: 4,
    title: "Hacer ejercicio"
  },
  {
    id: 5,
    title: "Ir de compras"
  },
  {
    id: 6,
    title: "Coordinar proyecto"
  },
  {
    id: 7,
    title: "Hacer ejercicio"
  },
  {
    id: 8,
    title: "Ir de compras"
  },
  {
    id: 9,
    title: "Coordinar proyecto"
  },
  {
    id: 10,
    title: "Hacer ejercicio"
  },
  {
    id: 11,
    title: "Ir de compras"
  },
  {
    id: 12,
    title: "Coordinar proyecto"
  },
]

export default function Tasks() {

  const [listData, setListData] = useState(
    tareas.map((items, index) => ({
      key: `${items.id}`,
      title: items.title
    }))
  )

  const bottonSheetModalRef = useRef(null)

  const snapPoints = ["65%"]

  function handlePresentModal() {
    bottonSheetModalRef.current?.present()
  }

  return (
    <SwipeListView
      data={listData}
      renderItem={(data, rowMap) => (

        <View style={styles.container}>
          <TouchableOpacity onPress={()=> handlePresentModal()} style={styles.task}>

            <TouchableOpacity style={styles.circle}>
            </TouchableOpacity>

            <View style={styles.text}>
              <StyledText>{data.item.title} </StyledText>
            </View>

            <TouchableOpacity style={styles.iconRigth}>
              <Entypo name="share-alternative" size={18} color="black" />
            </TouchableOpacity>

          </TouchableOpacity>

          <BottomSheetModal
             ref={bottonSheetModalRef}
             index={0}
             snapPoints={snapPoints}
             backgroundStyle = {{backgroundColor: "#EEEEEE"}}
           >
            <ModalEditTask />
          </BottomSheetModal>

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