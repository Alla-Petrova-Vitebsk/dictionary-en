export default class CardWord {
  constructor(word) {
    const cardWordElement = document.getElementById('card-word');
    cardWordElement.innerHTML = '';
    const cardWordDiv = document.createElement('div');
    cardWordDiv.className = 'card-word';
    cardWordElement.append(cardWordDiv);
    cardWordDiv.innerHTML = `
  <div>
    <img src='assets/${word.image}' class="img-word">
  </div>
  <div>
  <div class="word-translate">
    <h2>${word.word}</h2>
    <div>${word.transcription}</div>
    <div>${word.wordTranslate}</div>
    <audio src='assets/${word.audio}' controls></audio>
    </div>
    <div class="word-example">
    <div>${word.textExample}</div>
    <div>${word.textExampleTranslate}</div>
    <audio src='assets/${word.audioExample}' controls></audio>
    </div>
    <div class="word-example">
    <div>${word.textMeaning}</div>
    <div>${word.textMeaningTranslate}</div>
    <audio src='assets/${word.audioMeaning}' controls></audio>
    </div>
  </div>
  `
  }
}