import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import * as WordController from './controllers/wordController.js'

mongoose
	.connect('mongodb://localhost:27017/learnwords')
	.then(() => console.log('Connected to DB - OK'))
	.catch ((err) => console.log ('DB error',OK))

const app = express()
app.use(express.json())
app.use(cors())

app.get('/words', WordController.getAll)
app.post('/words',WordController.add)
app.delete('words/:word',WordController.remove)

app.listen(4444, (err) => {
	if (err) { return console.log(err) }
	console.log('server OK')
})