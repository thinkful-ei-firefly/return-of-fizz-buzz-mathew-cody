'use strict';

function fizzBuzz() {
  $('#number-chooser').on('submit', (e) => {
    e.preventDefault();

    const elementList = [];

    console.log('Submit Pressed');

    const num = parseInt($('#number-choice').val());

    console.log(num);

    // 3fizz 5buzz both fizzbuzz else number
    for (let i = 1; i <= num; i++) {
      if (i % 15 === 0) {
        elementList.push(handleFizzBuzzString('fizzbuzz'));
      }
      else if (i % 3 === 0) {
        elementList.push(handleFizzBuzzString('fizz'));
      }
      else if (i % 5 === 0) {
        elementList.push(handleFizzBuzzString('buzz'));
      }
      else {
        elementList.push(handleFizzBuzzString(i));
      }
    }

    displayFizzBuzz(elementList);

  });
}

function handleFizzBuzzString(str) {
  if (typeof (str) === 'number') {
    return `<div class="fizz-buzz-item"><span></span>${str}</div>`;
  }
  return `<div class="fizz-buzz-item ${str}"><span></span>${str}</div>`;
}

function displayFizzBuzz(arr) {
  for(const index in arr){
    $('.js-results').append(arr[index]);
  }
}


function main() {
  fizzBuzz();
}

$(main());