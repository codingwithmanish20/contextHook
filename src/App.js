import React, { useState } from 'react'
import Homes from './Pages/Homes'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Servics from './Pages/Servics'
import MyContextProvider from './contsxt/MyContextProvider'
import CustomePage from './Pages/CustomePage'
import ErrorPage from './Pages/ErrorPage'

const App = () => {

  return (
    <div>
      <MyContextProvider>
      <Homes  />
      <About />
      <Contact/>
      <Servics/>
      <CustomePage/>
      <ErrorPage/>


      </MyContextProvider>
     
    </div>
  )
}

export default App
