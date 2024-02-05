import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,  Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/home/Home'
import About from './components/About/About'
import User from './components/user/User'
import Login from './components/login/Login'
import Github, { githubInfo } from './components/github/Github'
import Registration from './components/registration/Registration'
import RegSuccess from './components/registrationSuccess/RegSuccess'
import LoginSuccess from './components/loginSuccess/LoginSuccess'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} /> 
      <Route path='user/' element={<User />}>
        <Route path=':userName' element={<User />} />
      </Route>
      <Route path='login' element={<Login />} >
        {/* <Route path='/loginSuccess' element={<LoginSuccess />} /> */}
      </Route>
      <Route path='registration/' element={<Registration />} >
        <Route path='regSuccess' element={<RegSuccess />} />
      </Route>
      <Route loader={githubInfo}
      path='github' 
      element={<Github />} />
      <Route path='*' element={<div>Not found</div>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
