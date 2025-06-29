import React from 'react'
import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useContext(UserContext);

  const submitHandler = (event)=>{
    event.preventDefault();
    setUser({userName, password});
  }


  return (
    <div>
      <form>
        <input
        type = 'text'
        placeholder = "Enter Username"
        value = {userName}
        onChange = {(e)=> setUserName(e.target.value)}
        />
        <input
        type = 'password'
        placeholder = "Enter Password"
        value = {password}
        onChange = {(e)=> setPassword(e.target.value)}
        />
        <button onSubmit = {submitHandler}>Submit</button>
      </form>
    </div>
  )
}

export default Login