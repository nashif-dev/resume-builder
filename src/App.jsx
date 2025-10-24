import {Route, Routes} from "react-router-dom"
import './App.css'

import Button from '@mui/material/Button';
import { FaHome } from "react-icons/fa";

import Home from './pages/Home'
import Form from "./pages/Form";
import ResumeGenerator from "./pages/ResumeGenerator" 
import History from "./pages/History"
import Page404 from "./pages/Page404"
import Header from "./components/Header"
import Footer from "./components/Footer"

import './App.css'

function App() {

  return (
    <>
      <div className="">
        <Header/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/form' element={ <Form/> }/>
          <Route path='/resume' element={ <ResumeGenerator/> }/>
          <Route path='/history' element={ <History/> }/>
          <Route path='/*' element={ <Page404/> }/>

        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
