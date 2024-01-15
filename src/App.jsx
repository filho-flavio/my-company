import React from "react";
import './App.css'
import { RoutesApp } from './routes';
import { AuthProvider } from "./contexts/auth";
import { IoClose } from "react-icons/io5";


export function App() {

  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  )
}