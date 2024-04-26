import React from 'react'
import { Carddet } from './Carddet'
import { useParams } from 'react-router-dom'
import './Conpage.css'
import Card from './Card'
import { Link } from 'react-router-dom'

const Conpage = () => {
  const {id} = useParams();

  return (
    <div>
      <div className="conpage">
        <div className="head2">
        <div className="headleft">
        <p id='sectitle'>{Carddet[id].name}</p>
        <p id='avail'>Available for work!</p>
        </div>
        <div className="headright">
        <p id='likeview'>Likes {Carddet[id].likes}</p>
        <p id='likeview'>Views {Carddet[id].views}</p>
        {/* <button id='flw'> Follow</button> */}
       <Link to='/'><button id='flw'>Go Back</button></Link>
        </div>
        </div>
        <img src={Carddet[id].Image} alt="" srcset="" width={500} id='secimg'/>
        <p id="sec-det1">About the Designer</p>
        <p id='sec-det2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <button id='msg'>Write a message!</button>
        <Link to='/Follow'><button id='follow'>Follow for more Design Inspiration!</button></Link>
      </div>
      <p id="rec">Recommended for you</p>
      <div className="recc">
      <Card idx={9}/>
      <Card idx={10}/>
      <Card idx={5}/>
      <Card idx={8}/>
      <Card idx={2}/>
      <Card idx={6}/>
      <Card idx={4}/>
      <Card idx={1}/>
      </div>
    </div>
  )
}

export default Conpage
