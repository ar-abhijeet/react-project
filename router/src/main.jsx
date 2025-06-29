import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, {githubInfoLoader} from './components/Github/Github'

// const router = createBrowserRouter([{
//   path:'/',
//   element:<Layout/>,
//   children:[{
//     path:'',
//     element:<Home/>
//   },{
//     path:'about',
//     element:<About/>
//   },{
//     path:'Contact',
//     element:<Contact/>
//   }]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path='' element ={<Home/>}></Route>
      <Route path='about' element ={<About/>}></Route>
      <Route path='contact' element ={<Contact/>}></Route>
      <Route path='user/:userid' element ={<User/>}></Route>
      <Route path='github' element ={<Github/>}  loader={githubInfoLoader}></Route>
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
