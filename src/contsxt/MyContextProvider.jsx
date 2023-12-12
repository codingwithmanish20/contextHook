import React, { useEffect } from 'react';
import MyContext from './MyContext';

const MyContextProvider = ({ children }) => {
 
  const contextValue = 'Hello from Context!';
  const contextText = "checkvalue"
  const contactPage = "how i can show my contact page"
  const servicepage = "how to access service page"

  const login = () => {
  alert("how i can do this")
  }

  const logOut = () => {
    alert("logOut successfully")
  }
  
  
  return <MyContext.Provider value={{contextValue,contextText,contactPage,servicepage, login, logOut}}>
    {children}
    </MyContext.Provider>;
};

export default MyContextProvider;