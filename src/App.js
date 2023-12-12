import React, { useState } from 'react'
import Homes from './Pages/Homes'
import About from './Pages/About'
import MyContextProvider from './contsxt/MyContextProvider'

const App = () => {

  return (
    <div>
      <MyContextProvider>
      <Homes  />
      <About />
      </MyContextProvider>
     
    </div>
  )
}

export default App
