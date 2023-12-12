import React,{useContext} from 'react'
import MyContext from '../contsxt/MyContext'

const Servics = () => {
    const {servicepage} = useContext(MyContext)
  return (
    <div>
      <h1>{servicepage}</h1>
    </div>
  )
}

export default Servics
