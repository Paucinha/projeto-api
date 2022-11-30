import express from 'express'
import mongoose from 'mongoose'
import router from './routes'

const app = express()

app.use(express.json())
app.use(router)

mongoose.connect('mongodb+srv://paucinha:<password>@cluster0.rad4j7g.mongodb.net/?retryWrites=true&w=majority')

.then((data)=>{
    console.log('MongoDB Connection Succeeded')
})

.catch((err)=>{
    console.log('Error in Db connection',err.message)
})

app.listen(8080)
