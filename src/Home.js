import React, { useContext,useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {Appcontext} from './App'


const Home = () => {
 
   const {setshowmenu,showmenu,showmodal,setshowmodal}= useContext(Appcontext); 
  return <main>
  <button className= 'sidebar-toggle'   onClick={()=>{setshowmenu(!showmenu)}}>
  <FaBars></FaBars> 
  </button>
  <button className='btn' onClick={()=>{setshowmodal(!showmodal)}}>
    Show Modal
  </button>
  
  </main>
}

export default Home
