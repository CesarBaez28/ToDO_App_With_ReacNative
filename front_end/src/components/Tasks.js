import React, { useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view'
import StyledText from "./StyledText";
import theme from "../theme";
import ModalEditTask from "./ModalEditTask";
import ModalShareTask from "./ModalShareTask";
import ModalTaskShared from "./ModalTaskShared";
import CheckMark from "./CheckMark";
import { deleteTask } from "../api";

import 'react-native-gesture-handler'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { getUserDataForComponents } from "../asyncStorage";

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


export default function Tasks({ tasks, setTasks }) {
  const [user, setUser] = getUserDataForComponents();
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedTaskName, setSelectedTaskName] = useState(null);
  const [selectedSharedWith, setSelectedSharedWith] = useState(null)
  const [selectedCompleted, setSelectedCompleted] = useState(null)
  const bottonSheetModalRef = useRef(null)
  const bottonSheetModalShareRef = useRef(null)
  const bottonSheetModalSharedRef = useRef(null)

  const snapPoints = ["70%"]

  function setSelectedTask(id, name, completed) {
    setSelectedTaskId(id);
    setSelectedTaskName(name);
    setSelectedCompleted(completed);
  }

  function setSelectedSharedTask(id, name, shareWith, completed) {
    setSelectedTaskId(id);
    setSelectedTaskName(name);
    setSelectedSharedWith(shareWith);
    setSelectedCompleted(completed);
  }

  function handlePresentModal(id, name, completed) {
    setSelectedTask(id, name, completed);
    bottonSheetModalRef.current?.present();
  }

  function handlePresentShared(id, name, shareWith, completed) {
    setSelectedSharedTask(id, name, shareWith, completed);
    bottonSheetModalSharedRef.current?.present();
  }

  function handlePresentShare(id, name) {
    setSelectedTask(id, name);
    bottonSheetModalShareRef.current?.present();
  }

  function handleClosePresentShared() {
    bottonSheetModalShareRef.current?.close();
  }

  if (user) {
    return (
      <SwipeListView
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={(data, rowMap) => (

          <View style={styles.container}>
            <TouchableOpacity onPress={() => handlePresentModal(data.item.id, data.item.name, data.item.completed)} style={styles.task}>

              <CheckMark
                id={data.item.id}
                completed={data.item.completed}
                tasks={tasks}
                setTasks={setTasks}
              />

              <View style={styles.text}>
                <StyledText>{data.item.name} </StyledText>
              </View>

              {data.item.id_shared_with != null ? (
                <TouchableOpacity onPress={() => handlePresentShared(data.item.id, data.item.name, data.item.id_shared_with, data.item.completed)} style={styles.iconRigth}>
                  <Feather name="users" size={22} color="black" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => handlePresentShare(data.item.id, data.item.name)} style={styles.iconRigth}>
                  <Entypo name="share-alternative" size={22} color="black" />
                </TouchableOpacity>
              )}

            </TouchableOpacity>

            <BottomSheetModal
              ref={bottonSheetModalRef}
              index={0}
              snapPoints={snapPoints}
              backgroundStyle={{ backgroundColor: "#EEEEEE" }}
            >
              <ModalEditTask
                idTask={selectedTaskId}
                nameTask={selectedTaskName}
                completed={selectedCompleted}
                tasks={tasks}
                setTasks={setTasks}
              />
            </BottomSheetModal>

            <BottomSheetModal
              ref={bottonSheetModalShareRef}
              index={0}
              snapPoints={snapPoints}
              backgroundStyle={{ backgroundColor: "#EEEEEE" }}
            >
              <ModalShareTask
                closeModal={handleClosePresentShared}
                idUser={user.id}
                idTask={selectedTaskId}
                nameTask={selectedTaskName}
                setTasks={setTasks}
                tasks={tasks}
              />
            </BottomSheetModal>

            <BottomSheetModal
              ref={bottonSheetModalSharedRef}
              index={0}
              snapPoints={snapPoints}
              backgroundStyle={{ backgroundColor: "#EEEEEE" }}
            >
              <ModalTaskShared
                id={selectedTaskId}
                nameTask={selectedTaskName}
                idShareWith={selectedSharedWith}
                completed={selectedCompleted}
              />
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
}