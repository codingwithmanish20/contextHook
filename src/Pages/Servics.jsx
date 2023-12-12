import React,{useContext} from 'react'
import MyContext from '../contsxt/MyContext'

const Servics = () => {
    const {servicepage} = useContext(MyContext)
  return (
    <div>
      <h6>{servicepage}</h6>
    </div>
  )
}

export default Servics
