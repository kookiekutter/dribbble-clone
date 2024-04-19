import React from 'react'
import './endpage.css'

const Endpage = () => {
  return (
    <div id='endpage'>
      <div className="browsebtn"><button className="browse">Browse more Inspiration</button></div>
        <div className="enddetails">
           <div className="enddet2">
             <p className="end1">Find your next designer today</p>
            <p className="end2">The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.</p>
            <div className="endbtns">
                <button className="getstarted">Get started now</button>
                <button className="Learn">Learn about hiring</button>
            </div>
            <p className="joind">Are you a designer? <a href="#" className="join">Join Dribbble</a></p>
       </div> </div>
    </div>
  )
}

export default Endpage
