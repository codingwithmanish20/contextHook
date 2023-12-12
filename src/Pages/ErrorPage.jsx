import React, { useContext } from 'react'
import MyContext from '../contsxt/MyContext'

const ErrorPage = () => {
   const {backtohome,Errorpage} = useContext(MyContext)
  return (
    <div>
      <h5>{Errorpage}</h5>
      <button onClick={backtohome}>back to home</button>
    </div>
  )
}

export default ErrorPage
