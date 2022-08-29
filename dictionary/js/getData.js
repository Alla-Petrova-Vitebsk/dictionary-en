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
    // console.log(event)
    if (event.target.classList.contains('word')) {
      let wordBtn = event.target.textContent
      // let word = this.getWords(wordBtn)
      let word = this.words.filter((item) =>
        item.word.toLowerCase() === event.target.innerHTML.toLowerCase())
      // console.log(word)
      let cardWord = new CardWord(word[0])
    }
    this.toggleActiveWord(event)
  }

  //при щелчке по слову - отобразить карточку
  showWord() {
    const wordsElement = document.getElementById('words')
    wordsElement.addEventListener('click', (event) => this.showCardWord(event))
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

  //добавление слова в словарь и проверка на существование
  async addWord() {
    const formAddWord = document.getElementById('form-add-word')
    const submitBtnAddWord = formAddWord.querySelector('#submit-btn-add-word')
    const group = formAddWord.querySelector('#group')
    const page = formAddWord.querySelector('#page')
    const word = formAddWord.querySelector('#word')
    formAddWord.addEventListener('submit', (event) => {
      event.preventDefault()
      const newWord = {
        group: group.value,
        page: page.value,
        word: word.value.trim(),
        transcription: transcription.value.trim(),
        wordTranslate: wordTranslate.value.trim()
      }
      submitBtnAddWord.disabled = true
      if (this.isWordExists(newWord)) {
       showModal(`Слово ${newWord.word} существует!`, 'error')
        formAddWord.reset()
        submitBtnAddWord.disabled = false
      } else {
        this.getWordsfromDB()
        this.addWordToDB(newWord)
       showModal(`Слово ${newWord.word} добавлено в словарь!`, 'valid')
        formAddWord.reset()
        submitBtnAddWord.disabled = false
      }
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
    formDeleteWord.addEventListener('submit', (event) => {
      event.preventDefault();
      const delWord = {
        word: delWordInput.value.trim()
      }
      submitBtnDelWord.disabled = true
       if (!this.isWordExists(delWord)) {
        showModal(`Слова ${delWord.word} не существует!`, 'error')
        formDeleteWord.reset()
        submitBtnDelWord.disabled = false
      } else {
        this.getWordsfromDB()
        this.deleteWordFromDB(delWord.word)
        showModal(`Слово ${delWord.word} удалено из словаря!`, 'valid')
        formDeleteWord.reset()
        submitBtnDelWord.disabled = false
      }
    })
  }

}
