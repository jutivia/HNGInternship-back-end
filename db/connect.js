const mongoose= require('mongoose')

const connectDb= (url)=>{
 mongoose.connect(process.env.MONGO_URI || url, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})
 mongoose.connection.on('connected', ()=>{
     console.log('mongoose is connected')
 })
}

module.exports=connectDb