import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowDetails from '../showList/ShowDetails'
import NavBar from './NavBar'
import Menu from './Menu'
import ShowLists from '../showList/ShowLists'
import PeopleList from '../People/PeopleList'
import RegistrationForm from '../Registration/RegistrationForm'

const Routing = () => {
  return (
    <BrowserRouter>
    <header>
      <NavBar />
      <Menu />      
    </header>
      <Routes>
          <Route path='/' element={<ShowLists />}></Route>
          <Route path='/showsDetails' element={<ShowDetails />}></Route>

          <Route path='/people' element={<PeopleList />}></Route>

          <Route path='/registration' element={<RegistrationForm />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
