import React from "react";
import { View, StyleSheet } from 'react-native'
import StyledText from "./StyledText"
import { getSharedTask } from "../api";

const styles = StyleSheet.create({
  nameTask: {
    marginTop: 10
  },
  statusSection: {
    marginTop: 15
  },
  statusContainer: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'center',
  },
  status: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  completed: {
    backgroundColor: "#14A16F",
  },
  incompleted: {
    backgroundColor: "#D13330"
  },
  participantsSection: {
    marginTop: 20
  },
  participantsContainer: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'center',
  },
  participant: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: "#2193B0",
    marginRight: 10
  }
})

export default function ModalTaskShared({ id, nameTask, idShareWith, completed }) {

  const [author, sharedWith] = getSharedTask(id)

  const status = [
    styles.status,
    completed === 1 ? styles.completed : styles.incompleted
  ]

  return (
    <View>
      <StyledText fontSize={'subheading'} fontWeight={'bold'} aling={'center'}>Tarea compartida</StyledText>
      <StyledText style={styles.nameTask} fontSize={'subheading'} fontWeight={'bold'} aling={'center'}>"{nameTask}"</StyledText>

      <View style={styles.statusSection}>
        <StyledText fontSize={'subheading'} aling={'center'}> Estado </StyledText>

        <View style={styles.statusContainer}>
          <View style={status}>
            <StyledText color={'white'} aling={'center'}>{completed === 1 ? "Completada" : "Incompleta"}</StyledText>
          </View>
        </View>
      </View>

      <View style={styles.participantsSection}>
        <StyledText fontSize={'subheading'} aling={'center'}> Participantes </StyledText>

        <View style={styles.participantsContainer}>
          <View style={styles.participant}>
            <StyledText color={'white'} aling={'center'}>{author}</StyledText>
          </View>
          <View style={styles.participant}>
            <StyledText color={'white'} aling={'center'}>{sharedWith}</StyledText>
          </View>
        </View>

      </View>

    </View>
  )
}