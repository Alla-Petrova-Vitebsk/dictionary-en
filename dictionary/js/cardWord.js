export default class CardWord {
  constructor(word) {
    const pathToFiles = '../../server/';
    const cardWordElement = document.getElementById('card-word');
    cardWordElement.innerHTML = '';
    const cardWordDiv = document.createElement('div');
    cardWordDiv.className = 'card-word';
    cardWordElement.append(cardWordDiv);
    cardWordDiv.innerHTML = `
  <div>
    <img src='${pathToFiles}${word.image}' class="img-word">
  </div>
  <div>
  <div class="word-translate">
    <h2>${word.word}</h2>
    <div class="transcription">${word.transcription}</div>
    <div class="translate">${word.wordTranslate}</div>
    <audio src='${pathToFiles}${word.audio}' controls></audio>
    </div>
    <div class="word-example">
    <div>${word.textExample}</div>
    <div>${word.textExampleTranslate}</div>
    <audio src='${pathToFiles}/${word.audioExample}' controls></audio>
    </div>
    <div class="word-example">
    <div>${word.textMeaning}</div>
    <div>${word.textMeaningTranslate}</div>
    <audio src='${pathToFiles}${word.audioMeaning}' controls></audio>
    </div>
    <div> Уровень ${word.group} </div>
  </div>
  `
  }
}