import { useState } from 'react'
import './App.css'
import AdmissionForm from './Pages/register/AdmissionForm'
import Deshboard from './Pages/deshboard/Deshboard'
// import Payment from './Pages/payment/Payment'
import SignIn from './Pages/signIn/SignIn'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SignIn/>} />
        <Route path="/register" element={<AdmissionForm/>} />
        {/* <Route path='/payment' element={<Payment/>}/> */}
        <Route path='/yoga' element={<Deshboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App