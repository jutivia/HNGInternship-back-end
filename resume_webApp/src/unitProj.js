import React, {useState, useEffect} from 'react'
import projData from './projData'
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import Footer from './Footer'
const UnitProj = () => {

  const {id} =useParams()
  const [proj, setProj]=useState({title:'', img:'',about:'',url:''})
  useEffect(()=>{
    const newProject = projData.find((person)=>person.id === parseInt(id));
    setProj({title:newProject.title, img:newProject.img, about:newProject.about, url:newProject.url})
  },[])
  
    return (<section  >
 <Navbar/>
     <Sidebar/>
    <Submenu/>
        <div className='unit-proj unitProj-container'>
            
           <img src={proj.img} alt={proj.title} className='unitPhoto' /> 
           <h2>{proj.title}</h2>
          <p>{proj.about}</p>
          <a href={proj.url}> visit website </a><br/>
          <Link to='/Projects'>Go Back </Link>
        </div>
        <Footer/>
   </section> )
}

export default UnitProj
