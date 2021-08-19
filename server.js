require('dotenv').config();
const express= require('express');
const connectDb= require('./db/connect')
const app= express();
app.use(express.json());
const User= require('./Schema/USER')

app.post('/post_question', async(req,res)=>{
    try {
         const user = User.create(req.body)
         console.log(user)
    } catch (error) {
        console.log(error)
    }
   

})

let port= process.env.PORT || 5000



if(process.env.NODE_ENV==='production'){
app.use(express.static('resume webApp/build'))
}

const start= async ()=>{
try {
await connectDb(process.env.CODE)
app.listen(port, ()=>console.log(`server running on port ${port}`))
} catch (error) {
    console.log(error)
}
}

start();