export default class Routing {
  constructor() {
    this.toDictionaryButton = document.getElementById('dictionary-show')
    this.toHomeButton = document.getElementById('to-home-page')
    this.toEditPage = document.getElementById('to-edit-page')
    this.homePage = document.getElementById('home-page')
    this.dictionaryPage = document.getElementById('dictionary-page')
    this.editPage = document.getElementById('edit-page')
    this.editPageButtons = document.getElementById('edit-page-buttons')
    this.toAddWordButton = document.getElementById('to-add-word')
    this.addWordPage = document.getElementById('add-word')
    this.formAddWord = document.getElementById('form-add-word')
    this.fromAddPageButton = document.getElementById('from-add-page')
    this.submitBtnAddWord = document.getElementById('submit-btn-add-word') 
    this.toDeleteWordButton = document.getElementById('to-delete-word')
    this.deleteWordPage = document.getElementById('delete-word')
    this.formDeleteWord = document.getElementById('form-delete-word')
    this.fromDeletePageButton = document.getElementById('from-delete-page')
    // this.submitBtnDelWord = document.getElementById('submit-btn-del-word')

    this.toDictionaryButton.addEventListener('click', () => this.showDictionary())
    this.toHomeButton.addEventListener('click', () => this.showHome())
    this.toEditPage.addEventListener('click', () => this.showEdit())
    this.toAddWordButton.addEventListener('click', () => this.showAddWord())
    this.fromAddPageButton.addEventListener('click', () => this.fromAddPage())
    this.toDeleteWordButton.addEventListener('click', () => this.showDeleteWord())
    this.fromDeletePageButton.addEventListener('click', () => this.fromDeletePage())
  }

  //отображение страницы поиска слов
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

  //отображение главной страницы
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

  //отображение страницы редактирования словаря
  showEdit() {
    this.homePage.classList.add("hide")
    this.dictionaryPage.classList.add("hide")
    this.editPage.classList.remove("hide")
    this.toEditPage.classList.add("hide")
    this.toDictionaryButton.classList.remove("hide")
    this.toHomeButton.classList.remove("hide")
  }

  //отображение страницы добавления слова в словарь
  showAddWord() {
    this.editPageButtons.classList.add("hide")
    this.addWordPage.classList.remove("hide")
  }

  //выход из режима добавления слова в словарь
  fromAddPage() {
    this.formAddWord.reset()
    this.addWordPage.classList.add('hide')
    this.editPageButtons.classList.remove('hide')
    this.submitBtnAddWord.disabled = false
  }

  //отображение страницы удаления слова из словаря
  showDeleteWord() {
    this.editPageButtons.classList.add("hide")
    this.deleteWordPage.classList.remove("hide")
  }

    //выход из режима удаления слова из словаря
  fromDeletePage(){
    this.formDeleteWord.reset()
    this.deleteWordPage.classList.add('hide')
    this.editPageButtons.classList.remove('hide')
    // this.submitBtnDelWord.disabled = false
  }
} 