import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Typist from 'react-typist'

const HomePage = () =>{
const [s2, setS2] =useState(false);
useEffect(()=>{
  setTimeout(()=>{
    setS2(true)
  },9050)
})
    return (<Link to='/Home'>
         <div className='home-body'>
      
      
        <div className='frontPage'>
         <div className='home-name' >
           <Typist avgTypingDelay={80} cursor={{show:false}}>
          <span><span style={{color:'grey'}}>&#60;</span>body<span style={{color:'grey'}}>&#62;</span></span></Typist>
         <br/>
         <br/> 
          <br/>
         <br/>
         <br/>
         <Typist avgTypingDelay={80} cursor={{show:false}} >
           <Typist.Delay ms={2500} />
         <span style={{marginLeft:'2.5rem'}}><span style={{color:'grey'}}>&#60;</span>h1<span style={{color:'grey'}}>&#62;</span></span>
         </Typist>
          <br/>
          <Typist cursor={{show:false}} avgTypingDelay={80} >
         <Typist.Delay ms={4000} />
      <h1 >Hi,<br/> 
      <Typist.Delay ms={600} />    
     I'm Ju&#768;mo&#768;ke&#769;<br/>
      <Typist.Delay ms={400} />
        Full-stack Developer.
        </h1>
         <br/>
         <br/>
         </Typist>
         <Typist cursor={{show:false}} avgTypingDelay={80} >
           <Typist.Delay ms={3070}/>
         <span style={{marginLeft:'2.5rem'}}><span style={{color:'grey'}}>&#60;/</span>h1<span style={{color:'grey'}}>&#62;</span></span></Typist>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
      
         <Typist cursor={{show:false}} avgTypingDelay={80} >
           <Typist.Delay ms={1500}/>
          <span><span style={{color:'grey'}}>&#60;/</span>body<span style={{color:'grey'}}>&#62;</span></span>
         </Typist>
       </div>
       </div>
       
    {s2 && <div className='stage'>  
      <div className='tap-link box'>
        <p >Tap anywhere to continue </p>
        </div>
        </div>}

         </div>
        </Link>
)
}

export default HomePage 
