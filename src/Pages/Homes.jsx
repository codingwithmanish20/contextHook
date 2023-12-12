import React, { useContext } from 'react';
import MyContext from '../contsxt/MyContext';

const Homes = () => {
    const { contextValue, contextText } = useContext(MyContext);
  


  return (
    <div>
      <h1>{contextValue}</h1>
      <h1>{contextText}</h1>


     
    </div>
  );
};

export default Homes;




