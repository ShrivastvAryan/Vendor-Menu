const express=require('express')
const app=express()
const PORT=5000

app.use(express.json());


app.listen(PORT,(error)=>{
    if(!error){
        console.log(`Server is running at ${PORT}`)
    }
    else{
        console.log(error)
    }
})