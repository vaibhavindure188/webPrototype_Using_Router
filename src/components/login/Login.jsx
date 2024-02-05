import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    <NavLink to = "/" >

    </NavLink> 
  };

  const handleNewUser = () =>{
    navigate("/registration");
  }

  return (
    <div>
      <h2>Login</h2>
      <input type='text' placeholder='username' /><br></br>
      <input type='passward' placeholder='passward' /><br></br>
      {/* <button onClick={handleLogin}>Login</button> */}
      <NavLink to = "/" onClick={handleLogin}>
         login
    </NavLink> 
      <br/><br/>
      
        <button onClick={handleNewUser} >newUser?</button>
      
      
    </div>
  );
}

export default Login;
