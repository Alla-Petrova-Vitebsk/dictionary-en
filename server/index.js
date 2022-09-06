import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'

import * as WordController from './controllers/wordController.js'

mongoose
	.connect('mongodb://localhost:27017/learnwords')
	.then(() => console.log('Connected to DB - OK'))
	.catch ((err) => console.log ('DB error',OK))

const app = express()
app.use(express.json())
app.use(cors())

const storage = multer.diskStorage({
	destination: (_,__,cb) => {
		cb(null,'files')
	},
	filename:(_,file,cb) => {
		cb(null,file.originalname)
	}
})

const files = multer({storage})

app.use('/files',express.static('files'))

app.post('/files',files.single('image'),
(req,res) =>{
	res.json({
		url:`/files/${req.file.originalname}`
	})
})

app.get('/words', WordController.getAll)
app.post('/words',WordController.add)
app.delete('/words/:word',WordController.remove)
app.patch('/words/:word',WordController.update)

app.listen(4444, (err) => {
	if (err) { return console.log(err) }
	console.log('server OK')
})