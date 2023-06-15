import React from "react";
import { StatusBar } from 'expo-status-bar';
import Main from "./src/components/Main";

export default function App() {
  return <>
    <StatusBar style='white' />
    <Main />
  </>
}