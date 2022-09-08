import CardWord from './cardWord.js'
import { showModal } from './utils.js'

export default class GetData {
  constructor() {
    this.baseUrl = 'http://localhost:4444'
    this.getWordsfromDB()
    this.findWords()
    this.showWord()
    this.addWord()
    this.delWord()
    this.updateWord()
  }

  //запрос на сервер для получения всех слов из базы словаря
  async getWordsfromDB() {
    // const response = await fetch('../../server/words/words.json')
    const response = await fetch(`${this.baseUrl}/words`, {
      method: "GET",
      headers: { 'Accept': 'application/json' }
    })
    if (response.ok === true) {
      this.words = await response.json()
    }
  }

  //фильтрация массива 
  getWords(query) {
    return this.words.filter((item) =>
      item.word.toLowerCase().indexOf(query.toLowerCase()) === 0)
  }

  //поск слов, используя элемент поиска
  findWords() {
    const seachInput = document.getElementById('word-seach')
    seachInput.oninput = () => {
      if (seachInput.value !== '') {
        let words = this.getWords(seachInput.value)
        this.showWords(words)
      } else {
        this.showWords([])
      }
    }
  }

  //отображение слов на экране
  showWords(words) {
    const wordsElement = document.getElementById('words')
    wordsElement.innerHTML = ''
    const wordsDiv = document.createElement('div')
    wordsDiv.className = 'words-div'
    wordsElement.append(wordsDiv)
    words.forEach((item) => {
      let element = document.createElement('div')
      element.className = 'word'
      element.textContent = `${item.word}`
      wordsDiv.append(element)
    })
  }

  //переключение цвета выбранного слова
  toggleActiveWord(event) {
    let wordsBtn = document.querySelectorAll('.word')
    wordsBtn.forEach((item) => {
      item.classList.remove('active')
    })
    event.target.classList.add('active')
  }

  //отображение карточки выбранного слова
  showCardWord(event) {
    if (event.target.classList.contains('word')) {
      let word = this.words.filter((item) =>
        item.word.toLowerCase() === event.target.innerHTML.toLowerCase())
      let cardWord = new CardWord(word[0])
    }
    this.toggleActiveWord(event)
  }

  //при щелчке по слову - отобразить карточку
  showWord() {
    const cardWord = document.getElementById('card-word')
    const wordsElement = document.getElementById('words')
    wordsElement.addEventListener('click', (event) => {
      this.showCardWord(event)
      cardWord.scrollIntoView({ block: "center", behavior: "smooth" })
    })
  }


  //запрос на сервер для добавления нового слова в базу словаря
  async addWordToDB(body) {
    const response = await fetch(`${this.baseUrl}/words`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    if (response.ok === true) {
      const newWord = await response.json()
      return newWord
    }
  }

  //проверка существования слова в словаре
  isWordExists(word) {
    let findWord = this.words.filter((item) =>
      item.word.toLowerCase() === word.word.toLowerCase())
    if (findWord.length !== 0) return true
    else return false
  }

  //предпросмотр загружаемого файла
  filePreview(file, previewDOM) {
    const fileReader = new FileReader()
    fileReader.onload = (e) => {
      const url = fileReader.result
      previewDOM.src = url
    }
    fileReader.readAsDataURL(file)
  }

  //запрос на запись файла на сервер
  async handleFileUpload(e, preview, fileName) {
    const files = e.target.files
    const file = files[0]
    this.filePreview(file, preview)
    const formData = new FormData()
    formData.append('image', file)
    const response = await fetch('http://localhost:4444/files', {
      method: 'POST',
      body: formData
    })
    if (response.ok === true) {
      const url = await response.json()
      fileName.textContent = file.name
    }
  }

  //добавление слова в словарь и проверка на существование
  async addWord() {
    const formAddWord = document.getElementById('form-add-word')
    const submitBtnAddWord = formAddWord.querySelector('#submit-btn-add-word')
    const group = formAddWord.querySelector('#group')
    const page = formAddWord.querySelector('#page')
    const word = formAddWord.querySelector('#word')
    const transcription = formAddWord.querySelector('#transcription')
    const wordTranslate = formAddWord.querySelector('#wordTranslate')
    const textExample = formAddWord.querySelector('#textExample')
    const textExampleTranslate = formAddWord.querySelector('#textExampleTranslate')
    const textMeaning = formAddWord.querySelector('#textMeaning')
    const textMeaningTranslate = formAddWord.querySelector('#textMeaningTranslate')

    const loadImg = document.getElementById('imageUpload')
    const previewImg = document.getElementById('img-preview')
    const imgFileName = document.getElementById("img-file-name")
    const loadAudio = document.getElementById('audioUpload')
    const previewAudio = document.getElementById('audio-preview')
    const audioFileName = document.getElementById('audio-file-name')
    const loadAudioExample = document.getElementById('audioExampleUpload')
    const previewAudioExample = document.getElementById('audioExample-preview')
    const audioExampleFileName = document.getElementById('audioExample-file-name')
    const loadAudioMeaning = document.getElementById('audioMeaningUpload')
    const previewAudioMeaning = document.getElementById('audioMeaning-preview')
    const audioMeaningFileName = document.getElementById('audioMeaning-file-name')

    loadImg.addEventListener('change', e => this.handleFileUpload(e, previewImg, imgFileName)) //выбор изображения
    loadAudio.addEventListener('change', e => this.handleFileUpload(e, previewAudio, audioFileName))
    loadAudioExample.addEventListener('change', e => this.handleFileUpload(e, previewAudioExample, audioExampleFileName))
    loadAudioMeaning.addEventListener('change', e => this.handleFileUpload(e, previewAudioMeaning, audioMeaningFileName))
    //Нажатие кнопки Отправить (запись слова в базу)
    formAddWord.addEventListener('submit', (event) => {
      event.preventDefault()
      const imageUrl = `files/${imgFileName.textContent}`
      const audioUrl = `files/${audioFileName.textContent}`
      const audioExampleUrl = `files/${audioExampleFileName.textContent}`
      const audioMeaningUrl = `files/${audioMeaningFileName.textContent}`

      const clearform = () => {
        formAddWord.reset()
        previewImg.src = ''
        previewAudio.src = ''
        previewAudioExample.src = ''
        previewAudioMeaning.src = ''
        imgFileName.textContent = 'Файл не выбран'
        audioFileName.textContent = 'Файл не выбран'
        audioExampleFileName.textContent = 'Файл не выбран'
        audioMeaningFileName.textContent = 'Файл не выбран'
        submitBtnAddWord.disabled = false
      }

      const newWord = {
        group: group.value,
        page: page.value,
        word: word.value.trim(),
        transcription: transcription.value.trim(),
        wordTranslate: wordTranslate.value.trim(),
        image: imageUrl,
        audio: audioUrl,
        textExample: textExample.value.trim(),
        textExampleTranslate: textExampleTranslate.value.trim(),
        audioExample: audioExampleUrl,
        textMeaning: textMeaning.value.trim(),
        textMeaningTranslate: textMeaningTranslate.value.trim(),
        audioMeaning: audioMeaningUrl
      }

      submitBtnAddWord.disabled = true
      if (this.isWordExists(newWord)) {
        showModal(`Слово ${newWord.word} существует!`, 'error')
        clearform()
      } else {
        this.getWordsfromDB()
        this.addWordToDB(newWord)
        showModal(`Слово ${newWord.word} добавлено в словарь!`, 'valid')
        clearform()
      }
      formAddWord.scrollIntoView({ block: "start", behavior: "smooth" })
    })
  }

  //запрос на сервер для удаления слова из базы словаря
  async deleteWordFromDB(word) {
    const response = await fetch(`${this.baseUrl}/words/${word}`, {
      method: "DELETE"
    })
    if (response.ok === true) {
      const deletedWord = await response.json()
      return deletedWord
    }
  }

  //удаление слова
  async delWord() {
    const formDeleteWord = document.getElementById('form-delete-word')
    const submitBtnDelWord = formDeleteWord.querySelector('#submit-btn-del-word')
    const delWordInput = formDeleteWord.querySelector('#del-word')
    const resetForm = () => {
      formDeleteWord.reset()
      submitBtnDelWord.disabled = false
    }
    formDeleteWord.addEventListener('submit', (event) => {
      event.preventDefault();
      const delWord = {
        word: delWordInput.value.trim()
      }
      submitBtnDelWord.disabled = true
      if (!this.isWordExists(delWord)) {
        showModal(`Слова ${delWord.word} не существует!`, 'error')
        resetForm()
      } else {
        const isConfirm = confirm(`Подтвердите удаление слова ${delWord.word}`)
        if (isConfirm) {
          this.getWordsfromDB()
          this.deleteWordFromDB(delWord.word)
          showModal(`Слово ${delWord.word} удалено из словаря!`, 'valid')
          resetForm()
        } else {
          resetForm()
        }
      }
    })
  }

  //запрос на сервер для обновления слова в базе словаря
  async updateWordInDB(word, body) {
    const response = await fetch(`${this.baseUrl}/words/${word}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    if (response.ok === true) {
      const editWord = await response.json()
      return editWord
    }
  }

  //найти слово (точное соответствие)
  getWord(word) {
    let findWord = this.words.filter((item) =>
      item.word.toLowerCase() === word.word.toLowerCase())
    if (findWord.length !== 0) return findWord
    else return {}
  }

  //Отобразить форму с данными найденного слова
  showWordInForm(formAddWord, word) {
    const pathToFiles = '../../server/'
    const formElements = {
      group: formAddWord.querySelector('#group-update'),
      page: formAddWord.querySelector('#page-update'),
      transcription: formAddWord.querySelector('#transcription-update'),
      wordTranslate: formAddWord.querySelector('#wordTranslate-update'),
      textExample: formAddWord.querySelector('#textExample-update'),
      textExampleTranslate: formAddWord.querySelector('#textExampleTranslate-update'),
      textMeaning: formAddWord.querySelector('#textMeaning-update'),
      textMeaningTranslate: formAddWord.querySelector('#textMeaningTranslate-update'),
      loadImg: document.getElementById('imageUpload-update'),
      previewImg: document.getElementById('img-preview-update'),
      imgFileName: document.getElementById("img-file-name-update"),
      loadAudio: document.getElementById('audioUpload-update'),
      previewAudio: document.getElementById('audio-preview-update'),
      audioFileName: document.getElementById('audio-file-name-update'),
      loadAudioExample: document.getElementById('audioExampleUpload-update'),
      previewAudioExample: document.getElementById('audioExample-preview-update'),
      audioExampleFileName: document.getElementById('audioExample-file-name-update'),
      loadAudioMeaning: document.getElementById('audioMeaningUpload-update'),
      previewAudioMeaning: document.getElementById('audioMeaning-preview-update'),
      audioMeaningFileName: document.getElementById('audioMeaning-file-name-update')
    }

    formElements.group.value = word.group
    formElements.page.value = word.page
    formElements.transcription.value = word.transcription
    formElements.wordTranslate.value = word.wordTranslate
    formElements.textExample.value = word.textExample
    formElements.textExampleTranslate.value = word.textExampleTranslate
    formElements.textMeaning.value = word.textMeaning
    formElements.textMeaningTranslate.value = word.textMeaningTranslate
    formElements.previewImg.src = `${pathToFiles}${word.image}`
    formElements.imgFileName.textContent = word.image.replace("files/","")
    formElements.previewAudio.src = `${pathToFiles}${word.audio}`
    formElements.audioFileName.textContent = word.audio.replace("files/","")
    formElements.previewAudioExample.src = `${pathToFiles}${word.audioExample}`
    formElements.audioExampleFileName.textContent = word.audioExample.replace("files/","")
    formElements.previewAudioMeaning.src = `${pathToFiles}${word.audioMeaning}`
    formElements.audioMeaningFileName.textContent = word.audioMeaning.replace("files/","")

    formElements.loadImg.addEventListener('change', e => this.handleFileUpload(e, formElements.previewImg, formElements.imgFileName)) //выбор изображения
    formElements.loadAudio.addEventListener('change', e => this.handleFileUpload(e, formElements.previewAudio, formElements.audioFileName))
    formElements.loadAudioExample.addEventListener('change', e => this.handleFileUpload(e, formElements.previewAudioExample, formElements.audioExampleFileName))
    formElements.loadAudioMeaning.addEventListener('change', e => this.handleFileUpload(e, formElements.previewAudioMeaning, formElements.audioMeaningFileName))

    return formElements
  }

  //обновление слова в словаре
  async updateWord() {
    const formFindWord = document.getElementById('form-find-word')
    const submitBtnFindWord = formFindWord.querySelector('#submit-btn-find-word')
    const findWordInput = formFindWord.querySelector('#find-word')

    const resetFormFind = () => {
      formFindWord.reset()
      submitBtnFindWord.disabled = false
    }

    formFindWord.addEventListener('submit', (event) => {
      event.preventDefault()
      const findWord = { word: findWordInput.value.trim() }
      submitBtnFindWord.disabled = true
      if (!this.isWordExists(findWord)) {
        showModal(`Слова ${findWord.word} не существует!`, 'error')
        resetFormFind()
      } else {
        findWordInput.disabled = true
        let editWord = this.getWord(findWord)[0]
        const formWordUpdate = document.getElementById('form-word-update')
        formWordUpdate.classList.remove('hide')
        let formElements = this.showWordInForm(formWordUpdate, editWord)
        //Нажатие кнопки Отправить (запись слова в базу)
        formWordUpdate.addEventListener('submit', (event) => {
          event.preventDefault()
          const updateWord = {
            group: formElements.group.value,
            page: formElements.page.value,
            transcription: formElements.transcription.value.trim(),
            wordTranslate: formElements.wordTranslate.value.trim(),
            image: `files/${formElements.imgFileName.textContent}`,
            audio: `files/${formElements.audioFileName.textContent}`,
            textExample: formElements.textExample.value.trim(),
            textExampleTranslate: formElements.textExampleTranslate.value.trim(),
            audioExample:`files/${formElements.audioExampleFileName.textContent}`,
            textMeaning: formElements.textMeaning.value.trim(),
            textMeaningTranslate: formElements.textMeaningTranslate.value.trim(),
            audioMeaning: `files/${formElements.audioMeaningFileName.textContent}`
          }
          this.updateWordInDB(editWord.word, updateWord)
          showModal(`Слово ${editWord.word} обновлено в словаре!`, 'valid')
          formFindWord.scrollIntoView({ block: "start", behavior: "smooth" })
        })
      }
    })
  }

}
