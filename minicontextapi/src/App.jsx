import './App.css'
import UserContextProvider from './context/userContext'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  

  return (
    <>
      <UserContextProvider>
        <h1>Abhi</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
