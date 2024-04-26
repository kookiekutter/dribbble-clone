import React from 'react'
import Card from './Components/Content/Card'

const Likes = ({liked,onlike}) => {
  return (
    <div>
      {liked.map((i,k)=>{
        <Card idx={k} onlike={onlike}/>
      })}
    </div>
  )
}

export default Likes
