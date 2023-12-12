import React, { useContext } from 'react';
import MyContext from '../contsxt/MyContext';

const Homes = () => {
    const { contextValue, contextText, logOut } = useContext(MyContext);
  


  return (
    <div>
      <h6>{contextValue}</h6>
      <h6>{contextText}</h6>
      <button onClick={logOut} >LogOut</button>
    </div>
  );
};

export default Homes;




