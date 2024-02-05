import React from 'react'
import { useNavigate } from 'react-router-dom'
function Registration() {
    const navigate = useNavigate();
    const handleSub = () =>{
        navigate('/login');
    }
  return (
    <div>
        <h1>Registration</h1>
        <form>
            <label htmlFor="username">UserId </label> <br/>
            <input type="text" /><br/>
            <label for="pass">Passward </label><br/>
            <input type="password"/><br/>
            <label for="">Name </label><br/>
            <input type="text" /><br/>
            <label for="gender">Gender </label>
            <input type="radio" value="Male"></input><br/>
            <input type="radio" value="Female"></input><br/>
            <label for="">Address </label>
            <input type="text" /><br/>
            <label for="">zip </label><br/>
            <input type="text" /> <br/>
            <label for="">Email </label><br/>
            <input type="text" /> <br/>
            <label for="">Language </label><br/>
            <input type="checkbox" /> English
            <input type="checkbox"/> Hindi <br/>
        
            <label for="">City </label><br/>
            <select name="" id=""><br/>
                <option value="">Pune</option><br/>
                <option value="">Mumbai</option><br/>
                <option value="">Bangluru</option><br/>
                <option value="">Delhi</option><br/>
                <option value="other">Other</option>
                
            </select><br/>
            <label >About</label>
            <textarea id="txtarea" value=""></textarea>
            <button type="submit" >submit</button>
        </form>
        <button onClick={handleSub} >Register</button>
    </div>
  )
}

export default Registration
