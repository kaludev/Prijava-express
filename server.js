const express = require('express');
const { StatusCodes } = require('http-status-codes');

const server = express();

const mysql = require('./database/connect.js')
server.use(express.static('public'))
server.use(express.json())
server.get("/", (req,res) =>{
    res.send("<h1>HOME</h1>")
})

server.post('/api/users', async (req,res) =>{
    const {email,password,name} = req.body;
    try{
        await mysql.query(
            'INSERT INTO users VALUES (?,?,?);',
            [
                email,
                name,
                password
                
            ])
        res.status(StatusCodes.CREATED).json({ok:true,message:"Registred succesfully"})
    }catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ok:false,message:error.message})
    }
})

server.listen(5000,() =>{
    console.log('Server started on port 5000')
})