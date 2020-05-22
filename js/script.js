window.addEventListener('load', start);
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const valueRed = document.querySelector('#valueRed');
const valueGreen = document.querySelector('#valueGreen');
const valueBlue = document.querySelector('#valueBlue');

function start() {
  preventFormSubmit();
  colorValueRed();
  colorValueGreen();
  colorValueBlue();
  red.value = 0;
  green.value = 0;
  blue.value = 0;
  valueRed.value = 0;
  valueGreen.value = 0;
  valueBlue.value = 0;
  render();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function colorValueRed() {
  function handleRed(event) {
    valueRed.value = event.target.value;
    render();
  }
  red.addEventListener('change', handleRed);
}
function colorValueGreen() {
  function handleGreen(event) {
    valueGreen.value = event.target.value;
    render();
  }
  green.addEventListener('change', handleGreen);
}
function colorValueBlue() {
  function handleBlue(event) {
    valueBlue.value = event.target.value;
    render();
  }
  blue.addEventListener('change', handleBlue);
}

function render() {
  let redSquare = valueRed.value;
  let greenSquare = valueGreen.value;
  let blueSquare = valueBlue.value;
  document.getElementById('square').style.background =
    'rgb(' + redSquare + ',' + greenSquare + ',' + blueSquare + ')';
}
