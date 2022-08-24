export default class Routing {
  constructor() {
    this.toDictionaryButton = document.getElementById('dictionary-show')
    this.toHomeButton = document.getElementById('to-home-page')
    this.toEditPage = document.getElementById('to-edit-page')
    this.homePage = document.getElementById('home-page')
    this.dictionaryPage = document.getElementById('dictionary-page')
    this.editPage = document.getElementById('edit-page')
    this.toDictionaryButton.addEventListener('click', () => this.showDictionary())
    this.toHomeButton.addEventListener('click', () => this.showHome())
    this.toEditPage.addEventListener('click', () => this.showEdit())
  }


  showDictionary() {
    this.homePage.classList.add("hide")
    this.dictionaryPage.classList.remove("hide")
    this.editPage.classList.add("hide")
    this.toDictionaryButton.classList.add("hide")
    this.toHomeButton.classList.remove("hide")
    this.toEditPage.classList.remove("hide")
  }

  showHome() {
    this.homePage.classList.remove("hide")
    this.dictionaryPage.classList.add("hide")
    this.editPage.classList.add("hide")
    this.toHomeButton.classList.add("hide")
    this.toDictionaryButton.classList.remove("hide")
    this.toEditPage.classList.remove("hide")
  }

  showEdit() {
    this.homePage.classList.add("hide")
    this.dictionaryPage.classList.add("hide")
    this.editPage.classList.remove("hide")
    this.toEditPage.classList.add("hide")
    this.toDictionaryButton.classList.remove("hide")
    this.toHomeButton.classList.remove("hide")
  }

} 