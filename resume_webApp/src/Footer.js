import React from 'react'
import sublinks from './data'

const linked= sublinks.find((item)=>{ return item.page =='Contact'})
const Footer = () => {
    const {links}= linked;
    return (<section className='footer-container'>
    <div className='footer-links'>
     {links.map((linker,index)=>{
         const {url, icon, label}= linker
         return(<article key={index}>
        <div className='footer-sublinks'>
         <a key={index} href={url}>
              {icon}</a>
       </div>
         </article>)
  })
  }
</div>
<p>&#169;copyright 2021</p>
  </section>  )
}

export default Footer
