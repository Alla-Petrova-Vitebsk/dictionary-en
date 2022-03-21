import wordsDb from '../assets/words/words.json' assert {type: "json"};
import CardWord from './cardWord.js';

export default class GetData {
  constructor() {
    this.words = Object.values(wordsDb);
    this.findWords();
    this.showWord();
  }

  findWords() {
    const seachInput = document.getElementById('word-seach');
    seachInput.oninput = () => {
      if (seachInput.value !== '') {
        let words = this.getWords(seachInput.value);
        this.showWords(words);
      } else {
        this.showWords([]);
      }
    }
  }

  getWords(query) {
    return this.words.filter((item) =>
      item.word.toLowerCase().indexOf(query.toLowerCase()) === 0);
  }

  showWords(words) {
    const wordsElement = document.getElementById('words');
    wordsElement.innerHTML = '';
    const wordsDiv = document.createElement('div');
    wordsDiv.className = 'words-div';
    wordsElement.append(wordsDiv);
    words.forEach((item) => {
      let element = document.createElement('div');
      element.className = 'word';
      element.textContent = `${item.word}`;
      wordsDiv.append(element);
    })
  }

  showCardWord(event) {
    if (event.target.className === 'word') {
      let wordBtn = event.target.textContent;
      let word = this.getWords(wordBtn);
      let cardWord = new CardWord (word[0]);
    }
  }

  showWord() {
    const wordsElement = document.getElementById('words');
    wordsElement.addEventListener('click',(event) => this.showCardWord(event));
  }
}
