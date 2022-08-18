import WordModel from '../models/word.js'

export const getAll = async (req,res) => {
	try {
		const words = await WordModel.find()
		res.json(words)
//		console.log(words)
	} catch (err) {
		res.status(500).json({message:"Не удается найти словарь"})
	}
}