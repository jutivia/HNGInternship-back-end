import React, {useState, useEffect} from 'react'
import jujuImg from './images/jumoke.jpeg'
import {useGlobalContext} from './context'
import { Link } from 'react-router-dom';
import { slideInLeft, fadeIn, zoomIn} from 'react-animations'
import Radium, {StyleRoot} from 'radium';

const Hero = () => {
  const {closeSubmenu}= useGlobalContext();
  
const [s2, setS2] = useState(false);
const [s3, setS3] = useState(false);
const [s4, setS4] = useState(false);

  const styles = {
  slideInLeft: {
    animationDuration: '1.5s',
    animationName: Radium.keyframes( slideInLeft,'slideInleft'),
    
    
  },
  fadeIn: {
    animation: 'x 2.5s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
  zoomIn: {
    animation: 'x 1.5s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn'),
  },
  
}

useEffect(()=>{
setTimeout(()=>{
  setS2(true)
},1500)

setTimeout(()=>{
  setS3(true)
},3000)

setTimeout(()=>{
  setS4(true)
},4000)


},[])

  return <StyleRoot>
  <section className='hero' onMouseOver={closeSubmenu}>
    <div className='hero-center'>
    <article className='hero-info'>
  <h1 style={styles.slideInLeft}>
  Full-stack Web Developer.<br/>
   Tech Enthusiast. <br/> Programmer.</h1>
 {s2 && <p style={styles.slideInLeft}>I create dynamic and easy to use websites   <br/> Bringing your designs to functionality <span style={{fontSize:'18px'}}> &#128522;</span> </p>}
 
 {s3 && <Link to='/About'><button className='btn' style={styles.fadeIn}>More About Me </button></Link>}
 
    </article>
  {s4 &&  <article className='hero-images' style={styles.fadeIn}>
      <img src={jujuImg} alt='' className='juju-img'/>
    </article>}
    
</div>
  </section>
  </StyleRoot>
}

export default Hero
