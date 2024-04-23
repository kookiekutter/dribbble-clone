import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='sign-up'>
      <div className="signup">
        <p className="heading">Sign up to Dribbble</p>
       
        <div className="signupbtns">
            {/* <div className="su-google">
            <button id="google">
                <img src="googlelogoDark.jpg" alt="" srcset="" width={150}/>
            </button>
            </div> */}
            <button id="su-googlebtn">Sign up with Google    </button>    
            <p>or</p>       
            <button id="su-mail">Continue with email </button>
        </div>

        <p className="su-det">
            By creating an account you agree with our <a href="#">Terms of Service</a>,<a href="#">Privacy Policy</a> and our default <a href="#">Notification Settings</a>
        </p>
        <p className="su-det2">
            Already have an account? <Link to='/Login'><a href="#" id='linksignup'>Sign In</a></Link>
        </p>
        <Link to='/'><button>Go Back</button></Link>
      </div>
    </div>
  )
}

export default Signup
