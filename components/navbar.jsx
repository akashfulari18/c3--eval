import Link from 'next/link'
import React from 'react'

const Navabr = () => {
  return (
    <div style={{display:"flex" ,justifyContent:"left",gap:"2rem"}}>Navabr

        <Link href={"/"}  style={{textDecoration:"none"}}><h2>home</h2> </Link>
        <Link href={"/projects"} style={{textDecoration:"none"}}><h2> Projects</h2></Link>
        <Link href={"/experience"} style={{textDecoration:"none"}}><h2> Experience</h2></Link>
    </div>
  )
}

export default Navabr