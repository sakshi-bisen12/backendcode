require('dotenv').config()

const express=require('express')

const app=express()

const port=4000

app.get('/' ,(req,res)=> {
        res.send('hello world')

})

app.get('/twitter' , (req,res) => {
        res.send('sakshibisen')

})
app.get('/youtube',(req,res)=>{
      res.send("<h2> chai aur code</h2>")  
})

app.get('/login' ,(req,res)=>{
        res.send('<h1>')
})

app.listen(process.env.PORT , () =>{
        console.log(`example app on listening port ${port}`)
})
