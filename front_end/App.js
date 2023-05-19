import React from "react";
import { StatusBar } from 'expo-status-bar';
import Main from "./src/components/Main";
import LoginScreen from "./src/screens/Login";

export default function App() {
  return <>
    <StatusBar style='black' />
    <Main />
  </>
}