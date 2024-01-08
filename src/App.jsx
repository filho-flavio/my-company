import React from "react";
import './App.css'
import { RoutesApp } from './routes';
import { AuthProvider } from "./contexts/auth";


export function App() {

  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  )
}