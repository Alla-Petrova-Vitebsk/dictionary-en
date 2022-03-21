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
    <h3>${word.word}</h3>
    <div>[${word.transcription}]</div>
    <div>${word.wordTranslate}</div>
    <audio src='assets/${word.audio}' controls></audio>
    <div>${textExample}</div>
    <div>${word.textExampleTranslate}</div>
    <audio src='assets/${word.audioExample}' controls></audio>
  </div>
  `
  }
}