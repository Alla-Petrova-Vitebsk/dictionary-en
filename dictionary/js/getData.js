import wordsDb from '../assets/words/words.json' assert {type: "json"};

export default class GetData {
  constructor() {
    this.words = Object.values(wordsDb);
    this.findWords();
    this.showWord();
  }

  findWords() {
    console.log(this.words)
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
    console.log(words);
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
      console.log(wordBtn);
     let word = this.getWords(wordBtn);
     console.log(word);
    }
  }

  showWord() {
    const wordsElement = document.getElementById('words');
    wordsElement.addEventListener('click',(event) => this.showCardWord(event));
  }


}
