import React,{useContext,useState} from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
// import {Parent} from './context'
// import { Appcontext } from './context'

 export const Appcontext=React.createContext();
function App() {

  const [showmenu,setshowmenu]=useState(false);
  const [showmodal,setshowmodal]=useState(false);

  // console.log('heyyyy',useContext(Appcontext));

  return <>
   <Appcontext.Provider value={{setshowmenu,showmenu,showmodal,setshowmodal}}>
     <Home></Home>
     <Sidebar></Sidebar>
     <Modal></Modal>
    </Appcontext.Provider>
  </>
}

export default App

