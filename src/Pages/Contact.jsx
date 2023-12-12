import React, { useContext } from 'react';
import MyContext from '../contsxt/MyContext'

const Contact = () => {
  const {contactPage} = useContext(MyContext)  
  return (
    <div>
      <h6>{contactPage}</h6>
    </div>
  )
}

export default Contact
