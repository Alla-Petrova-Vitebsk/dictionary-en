import GetData from "./js/getData.js"

const toDictionaryButton = document.getElementById('dictionary-show')
const toHomeButton = document.getElementById('to-home-page')
const toEditPage = document.getElementById('to-edit-page')
const homePage = document.getElementById('home-page')
const dictionaryPage = document.getElementById('dictionary-page')
const editPage = document.getElementById('edit-page')

const showDictionary = () => {
   homePage.classList.add("hide")
   dictionaryPage.classList.remove("hide")
   toDictionaryButton.classList.add("hide")
   toHomeButton.classList.remove("hide")
   toEditPage.classList.remove("hide")
}

const showHome = () => {
  homePage.classList.remove("hide")
  dictionaryPage.classList.add("hide")
  editPage.classList.add("hide")
  toHomeButton.classList.add("hide")
  toDictionaryButton.classList.remove("hide")
  toEditPage.classList.remove("hide")
}

const showEdit = () => {
  homePage.classList.add("hide")
  dictionaryPage.classList.add("hide")
  toEditPage.classList.add("hide")
  toDictionaryButton.classList.remove("hide")
  toHomeButton.classList.remove("hide")
}


toDictionaryButton.addEventListener('click',showDictionary)
toHomeButton.addEventListener('click',showHome)
toEditPage.addEventListener('click', showEdit)

const word = new (GetData)