import React, { useContext } from 'react'
import MyContext from '../contsxt/MyContext'

const CustomePage = () => {
    const {customePage} = useContext(MyContext)
  return (
    <div>
      <h6>{customePage}</h6>
    </div>
  )
}

export default CustomePage
