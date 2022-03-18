import wordsDb from '../assets/words/words.json' assert {type: "json"};

export default class GetData {
  constructor() {
    this.words = Object.values(wordsDb);
    this.setWords();
    this.findWord();
  }

  setWords() {
    console.log(this.words);
    const partwords = this.words.filter((item, id) => id < 10);
    console.log(partwords)
    partwords.forEach((item) => console.log(item.word));
  }

  findWord() {
    const seachInput = document.getElementById('word-seach');
    seachInput.oninput = () => {
      let words = this.getWords(seachInput.value);
      console.log(words);
      this.showWord(words);
    }
  }

  getWords(query) {
    return this.words.filter((item) =>
      item.word.toLowerCase().indexOf(query.toLowerCase()) == 0);
  }

  showWord(words) {
    const wordsElement = document.getElementById('words');
    const wordsDiv = document.createElement('div'); 
    wordsElement.append(wordsDiv);

    words.forEach((item) => {
      let element = document.createElement('div');
      element.textContent = `${item.word}`;
      wordsDiv.append(element);
    })
  }

}
