import React from 'react'
import { Link } from 'react-router-dom'

const Navabr = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", gap:"30px"}} className="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/total"}>Total Todos</Link>
    </div>
  )
}

export default Navabr