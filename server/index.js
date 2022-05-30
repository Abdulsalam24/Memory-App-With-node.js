import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRouter from './routes/posts.js';

const app = express()


app.use(bodyParser.json({limit : '30mb' , extended : 'true'}))
app.use(bodyParser.urlencoded({limit : '30mb' , extended : 'true'}))
app.use(cors())

app.use('/posts', postRouter)


const CONNECT_URL = 'mongodb+srv://abdulsalam:abd2003@memoryapp0.esg4s.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECT_URL ,{useNewUrlParser : true})
    .then(() => app.listen(PORT , () => console.log(`Localhost running on Port: ${PORT}`)))
    .catch(error => console.log(error.message , 'error'))