const lastNumbers = [];
const CHECKNUMBER2 = 7;
const CHECKNUMBER3 = 9;

function getVal(inputfield, event) {
    const number = inputfield.value;
    if (event.keyCode === 13 && parseInt(number) < 37) {

        setNumberInCage(parseInt(number));
        // console.log(lastNumbers);
        inputfield.value = null;
    }
}

function setNumberInCage(newNumber) {
    lastNumbers.push(newNumber);
    const lastSevenNumbers = lastNumbers.slice(Math.max(lastNumbers.length - 7, 0));
    const lastNingNumbers = lastNumbers.slice(Math.max(lastNumbers.length - 9, 0));
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
        fillFields(red, black, even, uneven, lowNumber, highNumber, rowOne, rowTwo, rowThree, firstDozen, middleDozen, lastDozen, firstHalf, secondHalf, firstHalf2, secondHalf2);
        console.log(lastNumbers);
    } else {
        const firstHalf = checkFirstHalf(lastNumbers);
        const secondHalf = checkSecondHalf(lastNumbers);
        const firstHalf2 = checkFirstHalf(lastNumbers);
        const secondHalf2 = checkSecondHalf(lastNumbers);
        fillFields(null, null, null, null, null, null, null, null, null, null, null, null, firstHalf, secondHalf, firstHalf2, secondHalf2);
    }
    const lastTwentyNumbers = lastNumbers.slice(Math.max(lastNumbers.length - 20, 0));
    const Sequence = document.getElementById('Sequence');
    Sequence.innerHTML = lastTwentyNumbers;
}

function fillFields(reds, blacks, evens, unevens, lowNumbers, highNumbers, rowOnes, rowTwos, rowThrees, firstDozens, middleDozens, lastDozens, firstHalfs, secondHalfs, firstHalfs2, secondHalfs2) {
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
    const thrirdRow = document.getElementById("thrirdRow");
    thrirdRow.innerHTML = rowThrees;

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

function checkUneven(lastSevenNumbers) {
    const the_evens = lastSevenNumbers.filter(number => number % 2 == 0);
    if (the_evens.length >= CHECKNUMBER2) { return true; } else { return false; }
}

function checkEven(lastSevenNumbers) {
    const the_evens = lastSevenNumbers.filter(number => number % 2 == 1);
    if (the_evens.length >= CHECKNUMBER2) { return true; } else { return false; }
}

function checkHighNumber(lastSevenNumbers) {
    const the_evens = lastSevenNumbers.filter(number => number > 0 && number < 19);
    if (the_evens.length >= CHECKNUMBER2) { return true; } else { return false; }
}

function checkLowNumber(lastSevenNumbers) {
    const the_evens = lastSevenNumbers.filter(number => number > 18 && number < 37);
    if (the_evens.length >= CHECKNUMBER2) { return true; } else { return false; }
}

function checkFirstDozen(lastSevenNumbers) {
    const the_evens = lastSevenNumbers.filter(number => number > 13 && number < 37);
    if (the_evens.length >= CHECKNUMBER3) { return true; } else { return false; }
}

function checkLastDozen(lastSevenNumbers) {
    const the_evens = lastSevenNumbers.filter(number => number > 0 && number < 25);
    if (the_evens.length >= CHECKNUMBER3) { return true; } else { return false; }
}

function checkMiddleDozen(lastSevenNumbers) {
    const the_evens = lastSevenNumbers.filter(number => (number > 0 && number < 13));
    const the_last = lastSevenNumbers.filter(number => ((number > 24 && number < 37)));
    if (the_last.length + the_evens.length === CHECKNUMBER3) { return true; } else { return false; }
}

function checkRowOne(lastSevenNumber) {
    const rowOneNumbers = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
    const isFounded = rowOneNumbers.some(ai => lastSevenNumber.includes(ai));
    return !isFounded;
}

function checkRowTwo(lastSevenNumber) {
    const rowOneNumbers = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
    const isFounded = rowOneNumbers.some(ai => lastSevenNumber.includes(ai));
    return !isFounded;
}

function checkRowThree(lastSevenNumber) {
    const rowOneNumbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
    const isFounded = rowOneNumbers.some(ai => lastSevenNumber.includes(ai));
    return !isFounded;
}

function checkBlack(lastSevenNumber) {
    const rowOneNumbers = [2, 4, 6, 8, 11, 10, 13, 15, 17, 20, 22, 24, 26, 29, 28, 31, 33, 35];
    const isFounded = rowOneNumbers.some(ai => lastSevenNumber.includes(ai));
    return !isFounded;
}

function checkRed(lastSevenNumber) {
    const rowOneNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
    const isFounded = rowOneNumbers.some(ai => lastSevenNumber.includes(ai));
    return !isFounded;
}

function checkFirstHalf(numbers) {
    let count = 0;
    const firstHalfNumber = [9, 22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25];
    numbers.forEach(l => {
        const init = firstHalfNumber.filter(k => k == l);
        if (init > 0) {
            count++;
        }
    });
    return count;
}

function checkSecondHalf(numbers) {
    let count = 0;
    const firstHalfNumber = [17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31];
    numbers.forEach(l => {
        const init = firstHalfNumber.filter(k => k == l);
        if (init > 0) {
            count++;
        }
    });
    return count;
}

function checkFirstHalf2(numbers) {
    let count = 0;
    const firstHalfNumber = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 32, 10];
    numbers.forEach(l => {
        const init = firstHalfNumber.filter(k => k == l);
        if (init > 0) {
            count++;
        }
    });
    return count;
}

function checkSecondHalf2(numbers) {
    let count = 0;
    const firstHalfNumber = [26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5];
    numbers.forEach(l => {
        const init = firstHalfNumber.filter(k => k == l);
        if (init > 0) {
            count++;
        }
    });
    return count;
}