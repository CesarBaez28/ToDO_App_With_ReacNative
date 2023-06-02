import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { toggleTask } from "../api";

const styles = StyleSheet.create({
  checkMark: {
    width: 22,
    height: 22,
    borderRadius: '50%',
    borderColor: "#848484",
    borderWidth: 2,
    marginRight: 10
  },
  checkMarkChecked: {
    backgroundColor: '#2193B0',
    width: 22,
    height: 22,
    borderRadius: '50%',
    marginRight: 10
  }
})

export default function CheckMark({ id, completed, tasks, setTasks }) {
  return <>
    {completed === 0
      ? <TouchableOpacity 
          onPress={() => toggleTask(id, tasks, setTasks, completed)} 
          style={styles.checkMark}>
        </TouchableOpacity>
      : <TouchableOpacity 
          onPress={() => toggleTask(id, tasks, setTasks, completed)} 
          style={styles.checkMarkChecked}>
        </TouchableOpacity>
    }
  </>
}
