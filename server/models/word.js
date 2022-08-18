import mongoose from "mongoose"

const WordShema = new mongoose.Schema (
	{
    group: { type: Number, required: true },
    page: { type: Number, required: true },
    word: { type: String, required: true, max: 100 },
    image: { type: String, required: false, max: 150 },
    audio: { type: String, required: false, max: 150 },
    audioMeaning: { type: String, required: false, max: 150 },
    audioExample: { type: String, required: false, max: 150 },
    textMeaning: { type: String, required: false, max: 300 },
    textExample: { type: String, required: false, max: 300 },
    transcription: { type: String, required: false, max: 100 },
    wordTranslate: String,
    textMeaningTranslate: String,
    textExampleTranslate: String
  }
)

export default mongoose.model('Word',WordShema)