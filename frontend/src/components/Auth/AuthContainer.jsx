import React from 'react'
import Auth from './Auth'
import Register from './Register'
import { BrowserRouter, Route, Routes } from "react-router-dom"


export default function AuthContainer() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='register' element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}
