import { useState } from 'react'
import './App.scss'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'


function App() {

  const [menu, setMenu] = useState('close');

  const handleMenu = () => {
    setMenu(menu === 'close' ? 'open' : 'close');
  };

  const handleNavClick=()=>{
    setMenu('close')
  }


  return (
    <>
        <i onClick={handleMenu} className={`hamburger ${menu==="open"?" fa-regular fa-circle-xmark":"fa-solid fa-bars"}`}></i>
    <div className='wrapper'>
      <Sidebar menu={menu} handleNavClick={handleNavClick}/>
      <div className='page'>
      <Outlet/>
        <span className='top-tags tags'>&lt;body&gt;</span>
        <span className='bottom-tags tags'>&lt;/body&gt;</span>
       <br/>
        <span className='bottom-tag-html tags'>&lt;/html&gt;</span>
      </div>
  
      </div>
    </>
  )
}

export default App
