import React from 'react'
import { Link } from 'react-router-dom';
const Error = () => {
    
    return (<section className='hero'>
    <div  style={{width:'100%', display:'flex', justifyContent:'center', flexDirection:'column', margin:'5rem auto', alignItems:'center' }}>
     <h4 style={{ textAlign:'center'}}>This is an error page </h4>
    <Link to='/Home'> <button className='btn' style={{margin:'10px auto', selfAlign:'center',}}>Go Back Home</button></Link>
</div>
   </section> )
}

export default Error
