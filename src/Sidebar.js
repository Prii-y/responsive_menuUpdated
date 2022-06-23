import React, { useContext } from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { Appcontext } from './App'

const Sidebar = () => {
   const {showmenu,setshowmenu}=useContext(Appcontext)
   console.log(showmenu);
  return <aside className={`${showmenu ? 'sidebar show-sidebar': 'sidebar'} `}>
  <div className='sidebar-header'>
  <img src='https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png'
   className='logo' alt='logo'></img>
  <button onClick={()=>setshowmenu(!showmenu)} className='close-btn'>
    <FaTimes></FaTimes>
  </button>
  
  </div>
  <ul className='links'>
{
  links.map((elem)=>{
    const {id,url,text,icon}=elem;
    return <li key={id}>
      <a href={url}>
      {icon}{text}
      </a>
    </li>
  })
}
 </ul>
 <ul className='social-icons'>
{
  social.map((elem)=>{
    const {id,url,icon,text}=elem;
    return <li key={id}>
    <a href={url}>
      {icon}
    </a>
    </li>
  })
}
 </ul>
  </aside>
}

export default Sidebar
