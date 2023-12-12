import React from 'react';
import MyContext from './MyContext';

const MyContextProvider = ({ children }) => {
 
  const contextValue = 'Hello from Context!';
  const contextText = "checkvalue"
  


  return <MyContext.Provider value={{contextValue,contextText}}>
    {children}
    </MyContext.Provider>;
};

export default MyContextProvider;