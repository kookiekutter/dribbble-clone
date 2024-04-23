import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="headerleft">
            <ul>
                <li><select name="Finddes" id="finddesigners">
                  <option value="">Search for Designers</option> 
                <option value="">Find Designers </option>
                <option value="">Post a Job</option>
                </select>
                </li>
                <li><a href="#">Inspiration</a></li>
                <li><select name="courses" id="courses">
                  <option value="">UI Certificate</option> 
                <option value="">Courses</option>
                <option value="">UX Diploma</option>
                </select>
                </li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Go Pro</a></li>
            </ul>
        </div>

        <div className="headermiddle">
            <a href="#">Dribbble</a>
        </div>

        <div className="headerright">
            <ul>
                <li> <input type="text" placeholder='Search...'/> </li>
                <li><Link to='Login'><a href="#" id='login'>Log in</a></Link></li>
                <li ><Link to='Signup'><a href="#" id='signup'>Sign Up</a></Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
