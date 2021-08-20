import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import {useGlobalContext} from './context'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const {closeSidebar, isSidebarOpen}= useGlobalContext();
  return <aside className={`${isSidebarOpen?'sidebar-wrapper show':'sidebar-wrapper'}`}>
  <div className='sidebar'> 
<button className='close-btn' onClick={closeSidebar}>
  <FaTimes/>
</button>
<div className='sidebar-links'>
  {sublinks.map((item,index)=>{
     const {links, page}= item;
     return(<article key={index}>
     <Link to={`/${page}`} onClick={closeSidebar}>  <h4>{page}</h4></Link>
       <div className='sidebar-sublinks'>
         {links.map((link,index)=>{
           const {url, icon, label}= link
            return <a key={index} href={url} onClick={closeSidebar}>
              {icon}
            {label}</a>
       
       })}
       </div>
     </article>)
  })
  }
</div>

  </div>

  </aside>
}

export default Sidebar
