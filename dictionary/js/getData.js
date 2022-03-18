import wordsDb from '../assets/words/words.json' assert {type: "json"};

export default class GetData {
  constructor() {
    this.words = Object.values(wordsDb);
    this.findWord();
  }

  findWord() {
    const seachInput = document.getElementById('word-seach');
    seachInput.oninput = () => {
    if (seachInput.value !== ''){
    let  words = this.getWords(seachInput.value);
      this.showWord(words);
    } else {
      this.showWord([]);
    }
    }
  }

  getWords(query) {
    return this.words.filter((item) =>
      item.word.toLowerCase().indexOf(query.toLowerCase()) === 0);
  }

  showWord(words) {
    const wordsElement = document.getElementById('words');
    wordsElement.innerHTML='';
    const wordsDiv = document.createElement('div'); 
    wordsDiv.className = 'words-div'
    wordsElement.append(wordsDiv);
    words.forEach((item) => {
      let element = document.createElement('div');
      element.className = 'word';
      element.textContent = `${item.word}`;
      wordsDiv.append(element);
    })
  }

}
