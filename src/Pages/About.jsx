import React, { useContext } from 'react';
import MyContext from '../contsxt/MyContext'

const About = () => {
    const {  contextText, contextValue } = useContext(MyContext);
  return (
    <div>
      <h3>{contextText}</h3>
      <h3>{contextValue}</h3>

     

    </div>
  )
}

export default About


