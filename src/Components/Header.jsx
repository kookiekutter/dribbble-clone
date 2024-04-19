import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="headerleft">
            <ul>
                <li><select name="Finddes" id="finddesigners">
                  <option value="">Search for Designers</option> 
                <option value="">Find Designer</option>
                <option value="">Post a Job</option>
                </select>
                </li>
                <li><a href="#">Inspiration</a></li>
                <li><select name="courses" id="courses">
                  <option value="">UI Certificate</option> 
                <option value="">UX Diploma</option>
                <option value="">Courses</option>
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
                <li><a href="#" id='login'>Log in</a></li>
                <li><a href="#" id='signup'>Sign Up</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
