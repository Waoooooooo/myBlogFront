import {Link} from  "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { ReactNode, useContext, useState } from "react"
import Login from "./components/Login"
import type userState from './features/user/userSlice'
import Header from "./components/Header"
import "./App.less"

function App() {

  const counter = useSelector<{counter:{value:number}}>(state => state.counter )
  const nickname= useSelector<userState>(state =>  state.user.nickname)
  const id= useSelector<userState>(state =>  state.user.id)
  const dispatch =  useDispatch()

  return (
      <Header/>
  )
}

export default App
