import React, { useContext } from 'react'
import MyContext from '../contsxt/MyContext'

const CustomePage = () => {
    const {customePage} = useContext(MyContext)
  return (
    <div>
      <h1>{customePage}</h1>
    </div>
  )
}

export default CustomePage
