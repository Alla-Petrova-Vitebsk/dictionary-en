import express from 'express'
import mongoose from 'mongoose'

mongoose
	.connect('mongodb://localhost:27017')
	.then(() => console.log('Connected to DB - OK'))
	.catch ((err) => console.log ('DB error',OK))



const app = express()
app.use(express.json())
app.listen(4444, (err) => {
	if (err) { return console.log(err) }
	console.log('server OK')
})