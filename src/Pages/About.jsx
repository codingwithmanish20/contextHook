import React, { useContext } from 'react';
import MyContext from '../contsxt/MyContext'

const About = () => {
    const {  contextText, contextValue, login } = useContext(MyContext);
  return (
    <div>
      <h3>{contextText}</h3>
      <h3>{contextValue}</h3>
      <button onClick={login} >click</button>

     

    </div>
  )
}

export default About


