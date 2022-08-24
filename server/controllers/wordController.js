import WordModel from '../models/word.js'

export const getAll = async (req, res) => {
	try {
		const words = await WordModel.find()
		res.json(words)
		//		console.log(words)
	} catch (err) {
		res.status(500).json({ message: "Не удается найти словарь" })
	}
}

export const add = async (req, res) => {
	try {
		const doc = new WordModel({
			group: req.body.group,
			page: req.body.page,
			word:req.body.word,
			image: req.body.image,
			audio: req.body.audio,
			audioMeaning: req.body.audioMeaning,
			audioExample: req.body.audioExample,
			textMeaning: req.body.textMeaning,
			textExample: req.body.textExample,
			transcription: req.body.transcription,
			wordTranslate:req.body.wordTranslate,
			textMeaningTranslate: req.body.textMeaningTranslate,
			textExampleTranslate: req.body.textExampleTranslate
		})
		const post = await doc.save()
		res.json(post)
	} catch (err) {
		res.status(500).json({ message: "Не удается добавить слово в словарь" })
	}
}

