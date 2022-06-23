import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Appcontext } from './App'
const Modal = () => {
   const {showmodal,setshowmodal}=useContext(Appcontext)
  return <div className={`${showmodal?'modal-overlay show-modal':'modal-overlay'}`}>
    <div className='modal-container'>
      <h3>Modal content</h3>
      <button className='close-modal-btn'onClick={()=>{setshowmodal(!showmodal)}} ><FaTimes></FaTimes></button>
    </div>
  </div>
}

export default Modal
