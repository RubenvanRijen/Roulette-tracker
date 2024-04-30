const lastNumbers = [];
const CHECKNUMBER2 = 7;
const CHECKNUMBER3 = 9;

/**
 * This function reloads the current page, effectively resetting all fields and data on the page.
 */
function reset() {
  location.reload();
}

/**
 * This function gets the value from the input field and checks if it's a valid number.
 * If the number is valid, it sets the number in the cage.
 * If the number is not valid, it shows a warning modal.
 *
 * @param {HTMLInputElement} inputfield - The input field element.
 * @param {KeyboardEvent} event - The keyboard event.
 */
function getVal(inputfield, event) {
  const number = parseInt(inputfield.value);
  if (event.keyCode === 13) {
    if (number >= 0 && number < 37) {
      setNumberInCage(number);
      inputfield.value = null;
    } else {
      var warningModal = new bootstrap.Modal(
        document.getElementById("warningModal")
      );
      warningModal.show();
    }
  }
}

/**
 * This function adds a new number to the cage, checks various conditions on the last few numbers,
 * and updates the fields accordingly.
 *
 * @param {number} newNumber - The new number to add to the cage.
 */
function setNumberInCage(newNumber) {
  lastNumbers.push(newNumber);
  const lastSevenNumbers = lastNumbers.slice(
    Math.max(lastNumbers.length - 7, 0)
  );
  const lastNingNumbers = lastNumbers.slice(
    Math.max(lastNumbers.length - 9, 0)
  );
  if (lastNumbers.length >= 7) {
    const uneven = checkUneven(lastSevenNumbers);
    const even = checkEven(lastSevenNumbers);
    const lowNumber = checkLowNumber(lastSevenNumbers);
    const highNumber = checkHighNumber(lastSevenNumbers);
    const rowOne = checkRowOne(lastNingNumbers);
    const rowTwo = checkRowTwo(lastNingNumbers);
    const rowThree = checkRowThree(lastNingNumbers);
    const firstDozen = checkFirstDozen(lastSevenNumbers);
    const middleDozen = checkMiddleDozen(lastSevenNumbers);
    const lastDozen = checkLastDozen(lastSevenNumbers);
    const red = checkRed(lastSevenNumbers);
    const black = checkBlack(lastSevenNumbers);
    const firstHalf = checkFirstHalf(lastNumbers);
    const secondHalf = checkSecondHalf(lastNumbers);
    const firstHalf2 = checkFirstHalf2(lastNumbers);
    const secondHalf2 = checkSecondHalf2(lastNumbers);
    fillFields(
      red,
      black,
      even,
      uneven,
      lowNumber,
      highNumber,
      rowOne,
      rowTwo,
      rowThree,
      firstDozen,
      middleDozen,
      lastDozen,
      firstHalf,
      secondHalf,
      firstHalf2,
      secondHalf2
    );
  } else {
    const firstHalf = checkFirstHalf(lastNumbers);
    const secondHalf = checkSecondHalf(lastNumbers);
    const firstHalf2 = checkFirstHalf(lastNumbers);
    const secondHalf2 = checkSecondHalf(lastNumbers);
    fillFields(
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      firstHalf,
      secondHalf,
      firstHalf2,
      secondHalf2
    );
  }
  const lastTwentyNumbers = lastNumbers.slice(
    Math.max(lastNumbers.length - 20, 0)
  );
  const Sequence = document.getElementById("Sequence");
  Sequence.innerHTML = lastTwentyNumbers;
}

/**
 * This function updates the HTML elements with the provided values.
 *
 * @param {number} reds - The value for the "Red" field.
 * @param {number} blacks - The value for the "Black" field.
 * @param {number} evens - The value for the "Even" field.
 * @param {number} unevens - The value for the "Uneven" field.
 * @param {number} lowNumbers - The value for the "Low" field.
 * @param {number} highNumbers - The value for the "High" field.
 * @param {number} rowOnes - The value for the "firstRow" field.
 * @param {number} rowTwos - The value for the "secondRow" field.
 * @param {number} rowThrees - The value for the "thirdRow" field.
 * @param {number} firstDozens - The value for the "firstDozen" field.
 * @param {number} middleDozens - The value for the "middleDozen" field.
 * @param {number} lastDozens - The value for the "lastDozen" field.
 * @param {number} firstHalfs - The value for the "firstHalf" field.
 * @param {number} secondHalfs - The value for the "secondHalf" field.
 * @param {number} firstHalfs2 - The value for the "firstHalf2" field.
 * @param {number} secondHalfs2 - The value for the "secondHalf2" field.
 */
function fillFields(
  reds,
  blacks,
  evens,
  unevens,
  lowNumbers,
  highNumbers,
  rowOnes,
  rowTwos,
  rowThrees,
  firstDozens,
  middleDozens,
  lastDozens,
  firstHalfs,
  secondHalfs,
  firstHalfs2,
  secondHalfs2
) {
  const red = document.getElementById("Red");
  red.innerHTML = reds;
  const black = document.getElementById("Black");
  black.innerHTML = blacks;

  const even = document.getElementById("Even");
  even.innerHTML = evens;
  const unEven = document.getElementById("Uneven");
  unEven.innerHTML = unevens;

  const low = document.getElementById("Low");
  low.innerHTML = lowNumbers;
  const high = document.getElementById("High");
  high.innerHTML = highNumbers;

  const firstRow = document.getElementById("firstRow");
  firstRow.innerHTML = rowOnes;
  const secondRow = document.getElementById("secondRow");
  secondRow.innerHTML = rowTwos;
  const thirdRow = document.getElementById("thirdRow");
  thirdRow.innerHTML = rowThrees;

  const firstDozen = document.getElementById("firstDozen");
  firstDozen.innerHTML = firstDozens;
  const middleDozen = document.getElementById("middleDozen");
  middleDozen.innerHTML = middleDozens;
  const lastDozen = document.getElementById("lastDozen");
  lastDozen.innerHTML = lastDozens;

  const firstHalf = document.getElementById("firstHalf");
  firstHalf.innerHTML = firstHalfs;
  const secondHalf = document.getElementById("secondHalf");
  secondHalf.innerHTML = secondHalfs;

  const firstHalf2 = document.getElementById("firstHalf2");
  firstHalf2.innerHTML = firstHalfs2;
  const secondHalf2 = document.getElementById("secondHalf2");
  secondHalf2.innerHTML = secondHalfs2;
}

/**
 * This function checks if the number of even numbers in the last seven numbers is greater than or equal to a certain threshold (CHECKNUMBER2).
 *
 * @param {number[]} lastSevenNumbers - The last seven numbers to check.
 * @returns {boolean} - Returns true if the number of even numbers is greater than or equal to CHECKNUMBER2, false otherwise.
 */
function checkUneven(lastSevenNumbers) {
  const the_evens = lastSevenNumbers.filter((number) => number % 2 == 0);
  if (the_evens.length >= CHECKNUMBER2) {
    return true;
  } else {
    return false;
  }
}

/**
 * This function checks if the number of odd numbers in the last seven numbers is greater than or equal to a certain threshold (CHECKNUMBER2).
 *
 * @param {number[]} lastSevenNumbers - The last seven numbers to check.
 * @returns {boolean} - Returns true if the number of odd numbers is greater than or equal to CHECKNUMBER2, false otherwise.
 */
function checkEven(lastSevenNumbers) {
  const the_evens = lastSevenNumbers.filter((number) => number % 2 == 1);
  if (the_evens.length >= CHECKNUMBER2) {
    return true;
  } else {
    return false;
  }
}

/**
 * This function checks if the number of numbers in the range 1-18 in the last seven numbers is greater than or equal to a certain threshold (CHECKNUMBER2).
 *
 * @param {number[]} lastSevenNumbers - The last seven numbers to check.
 * @returns {boolean} - Returns true if the number of numbers in the range 1-18 is greater than or equal to CHECKNUMBER2, false otherwise.
 */
function checkHighNumber(lastSevenNumbers) {
  const the_evens = lastSevenNumbers.filter(
    (number) => number > 0 && number < 19
  );
  if (the_evens.length >= CHECKNUMBER2) {
    return true;
  } else {
    return false;
  }
}

/**
 * This function checks if the number of numbers in the range 19-36 in the last seven numbers is greater than or equal to a certain threshold (CHECKNUMBER2).
 *
 * @param {number[]} lastSevenNumbers - The last seven numbers to check.
 * @returns {boolean} - Returns true if the number of numbers in the range 19-36 is greater than or equal to CHECKNUMBER2, false otherwise.
 */
function checkLowNumber(lastSevenNumbers) {
  const the_evens = lastSevenNumbers.filter(
    (number) => number > 18 && number < 37
  );
  if (the_evens.length >= CHECKNUMBER2) {
    return true;
  } else {
    return false;
  }
}

/**
 * This function checks if the number of numbers in the range 14-36 in the last seven numbers is greater than or equal to a certain threshold (CHECKNUMBER3).
 *
 * @param {number[]} lastSevenNumbers - The last seven numbers to check.
 * @returns {boolean} - Returns true if the number of numbers in the range 14-36 is greater than or equal to CHECKNUMBER3, false otherwise.
 */
function checkFirstDozen(lastSevenNumbers) {
  const the_evens = lastSevenNumbers.filter(
    (number) => number > 13 && number < 37
  );
  if (the_evens.length >= CHECKNUMBER3) {
    return true;
  } else {
    return false;
  }
}

/**
 * This function checks if the number of numbers in the range 1-24 in the last seven numbers is greater than or equal to a certain threshold (CHECKNUMBER3).
 *
 * @param {number[]} lastSevenNumbers - The last seven numbers to check.
 * @returns {boolean} - Returns true if the number of numbers in the range 1-24 is greater than or equal to CHECKNUMBER3, false otherwise.
 */
function checkLastDozen(lastSevenNumbers) {
  const the_evens = lastSevenNumbers.filter(
    (number) => number > 0 && number < 25
  );
  if (the_evens.length >= CHECKNUMBER3) {
    return true;
  } else {
    return false;
  }
}

/**
 * This function checks if the sum of numbers in the range 1-12 and 25-36 in the last seven numbers is equal to a certain threshold (CHECKNUMBER3).
 *
 * @param {number[]} lastSevenNumbers - The last seven numbers to check.
 * @returns {boolean} - Returns true if the sum of numbers in the range 1-12 and 25-36 is equal to CHECKNUMBER3, false otherwise.
 */
function checkMiddleDozen(lastSevenNumbers) {
  const the_evens = lastSevenNumbers.filter(
    (number) => number > 0 && number < 13
  );
  const the_last = lastSevenNumbers.filter(
    (number) => number > 24 && number < 37
  );
  if (the_last.length + the_evens.length === CHECKNUMBER3) {
    return true;
  } else {
    return false;
  }
}

/**
 * This function checks if any of the numbers in the first row are present in the last seven numbers.
 *
 * @param {number[]} lastSevenNumber - The last seven numbers to check.
 * @returns {boolean} - Returns false if any of the numbers in the first row are present, true otherwise.
 */
function checkRowOne(lastSevenNumber) {
  const rowOneNumbers = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
  const isFounded = rowOneNumbers.some((ai) => lastSevenNumber.includes(ai));
  return !isFounded;
}

/**
 * This function checks if any of the numbers in the second row are present in the last seven numbers.
 *
 * @param {number[]} lastSevenNumber - The last seven numbers to check.
 * @returns {boolean} - Returns false if any of the numbers in the second row are present, true otherwise.
 */
function checkRowTwo(lastSevenNumber) {
  const rowOneNumbers = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
  const isFounded = rowOneNumbers.some((ai) => lastSevenNumber.includes(ai));
  return !isFounded;
}

/**
 * This function checks if any of the numbers in the third row are present in the last seven numbers.
 *
 * @param {number[]} lastSevenNumber - The last seven numbers to check.
 * @returns {boolean} - Returns false if any of the numbers in the third row are present, true otherwise.
 */
function checkRowThree(lastSevenNumber) {
  const rowOneNumbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
  const isFounded = rowOneNumbers.some((ai) => lastSevenNumber.includes(ai));
  return !isFounded;
}

/**
 * This function checks if any of the black numbers are present in the last seven numbers.
 *
 * @param {number[]} lastSevenNumber - The last seven numbers to check.
 * @returns {boolean} - Returns false if any of the black numbers are present, true otherwise.
 */
function checkBlack(lastSevenNumber) {
  const rowOneNumbers = [
    2, 4, 6, 8, 11, 10, 13, 15, 17, 20, 22, 24, 26, 29, 28, 31, 33, 35,
  ];
  const isFounded = rowOneNumbers.some((ai) => lastSevenNumber.includes(ai));
  return !isFounded;
}

/**
 * This function checks if any of the red numbers are present in the last seven numbers.
 *
 * @param {number[]} lastSevenNumber - The last seven numbers to check.
 * @returns {boolean} - Returns false if any of the red numbers are present, true otherwise.
 */
function checkRed(lastSevenNumber) {
  const rowOneNumbers = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];
  const isFounded = rowOneNumbers.some((ai) => lastSevenNumber.includes(ai));
  return !isFounded;
}

/**
 * This function counts the number of numbers in the first half that are present in the input numbers.
 *
 * @param {number[]} numbers - The numbers to check.
 * @returns {number} - Returns the count of numbers in the first half that are present in the input numbers.
 */
function checkFirstHalf(numbers) {
  let count = 0;
  const firstHalfNumber = [
    9, 22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25,
  ];
  numbers.forEach((l) => {
    const init = firstHalfNumber.filter((k) => k == l);
    if (init > 0) {
      count++;
    }
  });
  return count;
}

/**
 * This function counts the number of numbers in the second half that are present in the input numbers.
 *
 * @param {number[]} numbers - The numbers to check.
 * @returns {number} - Returns the count of numbers in the second half that are present in the input numbers.
 */
function checkSecondHalf(numbers) {
  let count = 0;
  const firstHalfNumber = [
    17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31,
  ];
  numbers.forEach((l) => {
    const init = firstHalfNumber.filter((k) => k == l);
    if (init > 0) {
      count++;
    }
  });
  return count;
}

/**
 * This function counts the number of numbers in the first half that are present in the input numbers.
 *
 * @param {number[]} numbers - The numbers to check.
 * @returns {number} - Returns the count of numbers in the first half that are present in the input numbers.
 */
function checkFirstHalf2(numbers) {
  let count = 0;
  const firstHalfNumber = [
    0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 32, 10,
  ];
  numbers.forEach((l) => {
    const init = firstHalfNumber.filter((k) => k == l);
    if (init > 0) {
      count++;
    }
  });
  return count;
}

/**
 * This function counts the number of numbers in the second half that are present in the input numbers.
 *
 * @param {number[]} numbers - The numbers to check.
 * @returns {number} - Returns the count of numbers in the second half that are present in the input numbers.
 */
function checkSecondHalf2(numbers) {
  let count = 0;
  const firstHalfNumber = [
    26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5,
  ];
  numbers.forEach((l) => {
    const init = firstHalfNumber.filter((k) => k == l);
    if (init > 0) {
      count++;
    }
  });
  return count;
}
