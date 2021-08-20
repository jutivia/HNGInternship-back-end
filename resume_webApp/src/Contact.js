import React, {useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import Footer from './Footer'

const Contact =()=>{
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [msg, setMsg]=useState('')
    const [err, setErr]= useState('')
    const [form, setForm]= useState(true);
    const [afterForm, setAfterForm]= useState(false)
    let info=[]
    const handleSubmit =async (e)=>{
        e.preventDefault();
        if(!name ){
            setErr('Please enter your name')
        }
        if(!email ){
            setErr('Please enter your email')
        }
        if(!msg ){
            setErr('Please enter a message')
        }
        info.push({name,
            email,
            msg})
        try{
            
        await axios.post('http://localhost:5000/post_question', info)
        console.log(info)
       setForm(false);
       setAfterForm(true);
            }catch (error){
                console.log(error)
                setErr("Something went wrong. Please try again")
            }

    }
    return <>
    <Navbar/>
     <Sidebar/>
     <Submenu/>

    <section className='about-container contact-container'>
    <h1>Get In Touch </h1>
    { form && <div> <p> If you want to get in touch, talk to me about a project collaboration or just say hi, fill up the form below or send an email to <a target="_blank" href="https://mail.google.com/mail/u/0/?tab=km#inbox"><span style={{fontWeight:"bolder", color :'inherit'}}>rukkylaw.tl@gmail.com</span></a></p>

     <form className="myForm" id="forms" onSubmit={handleSubmit}>
      
      <input
       type="text" 
       value={name}
       onChange={(e)=>setName(e.target.value)}
        placeholder="Fill with your name" required/>
      
      <input 
      type="email" 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      placeholder="Enter your email address"
       required />

      <textarea type="text" 
      value={msg}  
      onChange={(e)=>setMsg(e.target.value)}
     placeholder="Write your message"/>
      <button type="submit" id="contacts" className="btn contact-btn">Submit</button>
        </form>
        <p class='error' style={{color:'red'}}>{err}</p>
        </div>
    }
    {afterForm && <p> Thank You {name} for getting in touch with me.<br/>
    Your message has been well recieved and I would get back to you as soon as possible </p>}
    </section>

     <Footer/>
    
    </>
}

export default Contact