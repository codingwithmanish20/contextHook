import React, { useContext } from 'react';
import MyContext from '../contsxt/MyContext'

const Contact = () => {
  const {contactPage} = useContext(MyContext)  
  return (
    <div>
      <h1>{contactPage}</h1>
    </div>
  )
}

export default Contact
