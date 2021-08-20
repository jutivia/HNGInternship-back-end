import React, {useState} from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import Footer from './Footer'
import Categories from './categoriesProj'
import data from './projData'

let newData=[]
 data.map((item) =>{
  let bag= item.languages
 return bag.map(x=>{
   newData.push(x)
  })
} );
const allCategories = ['All', ...new Set(newData)]


const Projects = () => {
  const [projItems, setProjItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const [about, setAbout]= useState(false)

  const filterItems = (language) => {
    if (language === 'All') {
      setProjItems(data);
      return;
    }else {
    const newItems=data.filter((item) => {
       if(item.languages.indexOf(language)>=0){
         return true
       }
    });
    setProjItems(newItems);
  }
  };

    return (<>
     <Navbar/>
     <Sidebar/>
    <Submenu/>

    <section className='project-container'>
        <h1>My Projects</h1>
      <Categories filterItems={filterItems} categories={categories}/>

     <div className='project-menu'>
      {projItems.map((item) => {
        const { id, title, img, about, url } = item;
        return (
          <article key={id} className='proj-item'>
            <img src={process.env.PUBLIC_URL + img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h3>{title}</h3>
                 <Link to={`/project/${id}`}><button className='more-btn'>Learn more</button></Link>
                
                </header>
            </div>
          </article>
        );
      })}
    </div>



    </section>
    <br/>
    <br/>

     <Footer/>
</>
    )
}

export default Projects
