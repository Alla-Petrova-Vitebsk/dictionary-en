export default class Routing {
  constructor() {
    this.toDictionaryButton = document.getElementById('dictionary-show')
    this.toHomeButton = document.getElementById('to-home-page')
    this.toEditPage = document.getElementById('to-edit-page')
    this.homePage = document.getElementById('home-page')
    this.dictionaryPage = document.getElementById('dictionary-page')
    this.editPage = document.getElementById('edit-page')
    this.toAddWordButton = document.getElementById('to-add-word')
    this.addWordPage = document.getElementById('add-word')
    this.editPageButtons = document.getElementById('edit-page-buttons')
    this.formAddWord = document.getElementById('form-add-word')

    this.toDictionaryButton.addEventListener('click', () => this.showDictionary())
    this.toHomeButton.addEventListener('click', () => this.showHome())
    this.toEditPage.addEventListener('click', () => this.showEdit())
    this.toAddWordButton.addEventListener('click',() => this.showAddWord())
  }


  showDictionary() {
    this.homePage.classList.add("hide")
    this.dictionaryPage.classList.remove("hide")
    this.editPage.classList.add("hide")
    this.toDictionaryButton.classList.add("hide")
    this.toHomeButton.classList.remove("hide")
    this.toEditPage.classList.remove("hide")
    this.formAddWord.reset()
    this.addWordPage.classList.add('hide')
    this.editPageButtons.classList.remove('hide')
  }

  showHome() {
    this.homePage.classList.remove("hide")
    this.dictionaryPage.classList.add("hide")
    this.editPage.classList.add("hide")
    this.toHomeButton.classList.add("hide")
    this.toDictionaryButton.classList.remove("hide")
    this.toEditPage.classList.remove("hide")
    this.formAddWord.reset()
    this.addWordPage.classList.add('hide')
    this.editPageButtons.classList.remove('hide')
  }

  showEdit() {
    this.homePage.classList.add("hide")
    this.dictionaryPage.classList.add("hide")
    this.editPage.classList.remove("hide")
    this.toEditPage.classList.add("hide")
    this.toDictionaryButton.classList.remove("hide")
    this.toHomeButton.classList.remove("hide")
  }

  showAddWord() {
    this.editPageButtons.classList.add("hide")
    this.addWordPage.classList.remove("hide")
  }


} 