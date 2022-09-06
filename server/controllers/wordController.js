import WordModel from '../models/word.js'

//получение всех слов
export const getAll = async (req, res) => {
	try {
		const words = await WordModel.find()
		res.json(words)
		//		console.log(words)
	} catch (err) {
		res.status(500).json({ message: "Не удается найти словарь" })
	}
}

//добавление слова
export const add = async (req, res) => {
	try {
		const doc = new WordModel({
			group: req.body.group,
			page: req.body.page,
			word: req.body.word,
			image: req.body.image,
			audio: req.body.audio,
			audioMeaning: req.body.audioMeaning,
			audioExample: req.body.audioExample,
			textMeaning: req.body.textMeaning,
			textExample: req.body.textExample,
			transcription: req.body.transcription,
			wordTranslate: req.body.wordTranslate,
			textMeaningTranslate: req.body.textMeaningTranslate,
			textExampleTranslate: req.body.textExampleTranslate
		})
		const word = await doc.save()
		res.json(word)
	} catch (err) {
		res.status(500).json({ message: "Не удается добавить слово в словарь" })
	}
}

//удаление слова
export const remove = async (req, res) => {
	try {
		const word = req.params.word
		WordModel.findOneAndDelete(
			{ word: word },
			(err, doc) => {
				if (err) { return res.status(500).json({ message: "Не удается удалить слово из словаря" }) }
				if (!doc) { return res.status(404).json({ message: "Слово не найдено" }) }
				res.json(doc)
			}
		)
	} catch (err) {
		res.status(500).json({ message: "Не удается удалить слово из словаря" })
	}
}


//изменение (обновление) слова
export const update = async (req, res) => {
	try {
		const word = req.params.word
		await WordModel.updateOne(
			{ word: word },
			{
				group: req.body.group,
				page: req.body.page,
				image: req.body.image,
				audio: req.body.audio,
				audioMeaning: req.body.audioMeaning,
				audioExample: req.body.audioExample,
				textMeaning: req.body.textMeaning,
				textExample: req.body.textExample,
				transcription: req.body.transcription,
				wordTranslate: req.body.wordTranslate,
				textMeaningTranslate: req.body.textMeaningTranslate,
				textExampleTranslate: req.body.textExampleTranslate
			})
		res.json({ success: true })
	} catch (err) {
		res.status(500).json({ message: "Не удается обновить слово" })
	}
}



