export default class Routing {
  constructor() {
    this.toDictionaryButton = document.getElementById('dictionary-show')
    this.toHomeButton = document.getElementById('to-home-page')
    this.toEditPage = document.getElementById('to-edit-page')
   
    this.homePage = document.getElementById('home-page')
    this.dictionaryPage = document.getElementById('dictionary-page')
    this.editPage = document.getElementById('edit-page')
   
    this.editPageButtons = document.getElementById('edit-page-buttons')
   //элементы страницы Добавления
this.toAddWordButton = document.getElementById('to-add-word')
    
    this.addWordPage = document.getElementById('add-word')
    this.formAddWord = document.getElementById('form-add-word')
    this.fromAddPageButton = document.getElementById('from-add-page')
    this.submitBtnAddWord = document.getElementById('submit-btn-add-word') 
   //элементы страницу удаления
this.toDeleteWordButton = document.getElementById('to-delete-word')

    this.deleteWordPage = document.getElementById('delete-word')
    this.formDeleteWord = document.getElementById('form-delete-word')
    this.fromDeletePageButton = document.getElementById('from-delete-page')
//элементы страницы обновления
this.toEditWordButton = document.getElementById('to-edit-word')
this.updateWordPage = document.getElementById('update-word')
this.fromUpdatePageButton = document.getElementById('from-update-page')
this.formFindWord = document.getElementById('form-find-word')
this.formWordUpdate = document.getElementById('form-word-update')
this.submitBtnFindWord = document.getElementById('submit-btn-find-word')

    this.exit = document.getElementById('exit')
 

    this.toDictionaryButton.addEventListener('click', () => this.showDictionary())
    this.toHomeButton.addEventListener('click', () => this.showHome())
    this.toEditPage.addEventListener('click', () => this.showEdit())
   
    this.toAddWordButton.addEventListener('click', () => this.showAddWord())
    this.fromAddPageButton.addEventListener('click', () => this.fromAddPage())
   
    this.toDeleteWordButton.addEventListener('click', () => this.showDeleteWord())
    this.fromDeletePageButton.addEventListener('click', () => this.fromDeletePage())

    this.toEditWordButton.addEventListener('click', ()=> this.showUpdateWord())
    this.fromUpdatePageButton.addEventListener('click',()=> this.fromUpdatePage())
    

    this.exit.addEventListener('click', () => location.reload())
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
    this.exit.classList.add("hide")
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
    this.exit.classList.add("hide")
  }

  //отображение страницы редактирования словаря
  showEdit() {
    this.homePage.classList.add("hide")
    this.dictionaryPage.classList.add("hide")
    this.editPage.classList.remove("hide")
    this.toEditPage.classList.add("hide")
    this.toHomeButton.classList.add('hide')
    this.toDictionaryButton.classList.add("hide")
    this.exit.classList.remove("hide")
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
   }

   //отображение страницы обновления слова
   showUpdateWord(){
    this.editPageButtons.classList.add("hide")
    this.updateWordPage.classList.remove("hide")
   }
   //выход из режима обновления слова
   fromUpdatePage(){
    this.formFindWord.reset()
    this.updateWordPage.classList.add("hide")
    this.editPageButtons.classList.remove('hide')
    this.formWordUpdate.reset()
    this.submitBtnFindWord.disabled=false 
    this.formWordUpdate.classList.add("hide")
   }
} 