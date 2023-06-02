import React, { useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view'
import StyledText from "./StyledText";
import theme from "../theme";
import ModalEditTask from "./ModalEditTask";
import ModalShareTask from "./ModalShareTask";
import CheckMark from "./CheckMark";
import { deleteTask } from "../api";

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

export default function Tasks({tasks, setTasks}) {

  const bottonSheetModalRef = useRef(null)
  const bottonSheetModalShareRef = useRef(null)

  const snapPoints = ["65%"]

  function handlePresentModal() {
    bottonSheetModalRef.current?.present()
  }

  function handlePresentShared() {
    bottonSheetModalShareRef.current?.present();
  }

  return (
    <SwipeListView
      data={tasks}
      keyExtractor={(task) => task.id}
      renderItem={(data, rowMap) => (

        <View style={styles.container}>
          <TouchableOpacity onPress={()=> handlePresentModal()} style={styles.task}>

            <CheckMark 
              id={data.item.id} 
              completed={data.item.completed}
              tasks={tasks}
              setTasks={setTasks}
            />

            <View style={styles.text}>
              <StyledText>{data.item.name} </StyledText>
            </View>

            <TouchableOpacity onPress={()=> handlePresentShared()} style={styles.iconRigth}>
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

          <BottomSheetModal
             ref={bottonSheetModalShareRef}
             index={0}
             snapPoints={snapPoints}
             backgroundStyle = {{backgroundColor: "#EEEEEE"}}
           >
            <ModalShareTask />
          </BottomSheetModal>

        </View>

      )}
      renderHiddenItem={(data, rowMap) => (
        <View style={styles.itemRigth}>
          <TouchableOpacity 
            onPress={() => deleteTask(data.item.id, tasks, setTasks)} 
            style={{ alignItems: 'center' }}>
            <Feather name="trash-2" size={20} color="white" />
          </TouchableOpacity>
        </View>
      )}
      rightOpenValue={-75}
    />
  )
}