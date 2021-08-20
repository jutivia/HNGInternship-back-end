import React from 'react'
import Navbar from './Navbar'

import Sidebar from './Sidebar'
import Submenu from './Submenu'
import Footer from './Footer'
import web  from './images/icons8-web-100.png'
import ios from './images/icons8-ios-development-80 (1).png'
import content from './images/icons8-content-100.png'

const About = () => {
    
    return (<>
     <Navbar/>
     <Sidebar/>
     <Submenu/>

<section className= "about-container">
            <div id="about-wrapper">
               <div id="about-intro-wrapper">
                 <h1>About Me</h1> 
               <p style={{width:'80%'}}> Hey there... <br/>
            I am a chemical engineering graduate and a self taught Full-Stack Developer who loves to write codes and bring beautiful UI/UX designs to life .<br/>
            I enjoy creating easy to use, responsive, and dynamic websites with very fast load times and lag free interactions.
        </p>
        <p>I graduated from the university of Lagos in 2019. In 2021, i decided to change career paths and become a software developer. Since then, I soon became proficient in some programming languages, frameworks and technologies such as <strong>HTML5, CSS, JavaScript, Jquery, React.js, Sass, Typescript, Redux, Express,wordPress, Node.js, MongoDb, NMDB, </strong>etc. Which i make use of in building full-stack apps, mostly using my main/favorite technology stack, MERN.</p>

        <p>I've highlighted my jobs, post university below:</p>
              </div> <br/>
              
              <div className="about-works-wrapper" >
                  <div class="another-works-wrapper">
                  <div className="works" id="mobile">
                     <a href='https://internship.zuri.team'><img src='https://internship.zuri.team/static/media/logo.36d2d48a.svg'   style={{height:'12%', color:'white', fontSize:'12px'}} alt=''/></a>
                      <h3 style={{padding:'5px 10px', color:'white', fontSize:'14px'}}>Developer Intern</h3>
                      <p style={{color:'white', fontSize:'12px'}}>August 2021- current date</p><br/>
                      <p><ul>
                       <li> -I build and complete tasks given by the co-ordinators </li>
                      <li>-I get to work in groups/teams of likeminded developers and share knowledge with them </li>
                      </ul></p>
                      
                      </div>
                  <div className="works" id="web"><br/>
                    <img src='https://flapafrica.net/files/uploads/2020/01/flapper-scaled.png' style={{height:'15%', color:'white', fontSize:'12px'}}/>
                    <h3 style={{padding:'5px 10px', color:'grey', fontSize:'14px' }}>Digital Marketer| CRM</h3>
                    <p >August 2021- Current Date</p><br/>
                   <p> <ul> 
                      <li>-I created engaging marketing contents for the social media pages which in turn increased the company's social media followers by a margin of 40%</li>
                    <li>-I maintained the product uploads to the company's website backend using wordpress</li>
                    <li>-I ran digital adverts for the company, which covered over 70% of the company's sales for the month via emails and social media platforms</li>
                    </ul>
                    </p>

                  </div>
                 </div>
              </div> 
              <br/><br/>
            </div>
             <Footer/>
            </section>

    
</>
    )
}


export default About
