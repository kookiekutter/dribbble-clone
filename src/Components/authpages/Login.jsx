import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div id='' style={{backgroundImage:'url("loginbg.jpg")' , backgroundPosition:'left',backgroundRepeat:'no-repeat' }}>
      <div className="login" >
      <p className="heading">Sign in to Dribbble</p>
       
       <div className="signupbtns">
           
           <button id="su-mail">Sign up with Google    </button>    
           <p>or sign in with email</p>       
       </div>
        <div className="logindet">
        <label htmlFor="username" id='label'>Username or Email</label>
        <input type='text' id='username'/>
        <label htmlFor="password" id='label'>Password</label>
        <input type='password' id='password'/>
        </div>
       <button id='su-googlebtn'>Sign in</button>
       <p className='su-det'> Don't have an account? <Link to='/Signup'><a href="">Sign up</a></Link></p>
       <Link to='/'><button>Go Back</button></Link>
      </div>
    </div>
  )
}

export default Login
