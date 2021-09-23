//for checking horizontal
const wordSearchHorizontal = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

//for checking reverse, backword
const wordSearchReverse = (letters) => {
  const wordSearchRev = letters.map(ls => ls.reverse());
  return wordSearchRev;
};

//for checking vertically , transpose then check horizontally
const transpose = function(letters) {
  let newLetters = new Array(letters[0].length);
  for (let i = 0; i < newLetters.length; i++) {
    newLetters[i] = new Array(letters.length);
  }

  for (let x = 0; x < letters.length; x++) {
    for (let y = 0; y < letters[0].length; y++) {
      newLetters[y][x] = letters[x][y];
    }
  }
  return newLetters;
};

//right bottom side to let side top '\'
const diagonallyBottomLeft = (letter, word) => {
  const Ylength = letter.length;
  const Xlength = letter[0].length;
  const maxLength = Math.max(Xlength, Ylength);
  let result;
  for (let k = 0; k <= 2 * (maxLength - 1); k++) {
    result = [];
    for (let y = Ylength - 1; y >= 0; y--) {
      let x = k - y;
      if (x >= 0 && x < Xlength) {
        result.push(letter[y][x]);
      }
    }
    if (result.length > 0) {
      let wordDiagonally = result.join('');
      if (wordDiagonally.includes(word)) return true;
    }
  }
  return false;
};


///bottom to right top  '/'
const diagonallyBottomRight = (letter, word) => {
  const Ylength = letter.length;
  const Xlength = letter[0].length;
  const maxLength = Math.max(Xlength, Ylength);
  let result;
  for (let k = 0; k <= 2 * (maxLength - 1); k++) {
    result = [];
    for (let y = Ylength - 1; y >= 0; y--) {
      let x = k - (Ylength - y);
      if (x >= 0 && x < Xlength) {
        result.push(letter[y][x]);
      }
    }
    if (result.length > 0) {
      let wordDiagonally = result.join('');
      if (wordDiagonally.includes(word)) return true;
    }
  }
  return false;
};


//right top to left bottom '/'
const diagonallyTopRight = (letter, word) => {
  const Ylength = letter.length;
  const Xlength = letter[0].length;
  const maxLength = Math.max(Xlength, Ylength);
  let result;
  for (let k = 0; k <= 2 * (maxLength - 1); k++) {
    result = [];
    for (let y = 0; y <= Ylength - 1; y++) {
      let x = k - (Ylength - y);
      if (x >= 0 && x < Xlength) {
        result.push(letter[x][y]);
      }
    }
    if (result.length > 0) {
      let wordDiagonally = result.join('');
      if (wordDiagonally.includes(word)) return true;
    }
  }
  return false;
};

//left top to bottom right
const diagonallyTopLeft = (letter, word) => {
  const Ylength = letter.length;
  const Xlength = letter[0].length;
  const maxLength = Math.max(Xlength, Ylength);
  let result;
  for (let k = 0; k <= 2 * (maxLength - 1); k++) {
    result = [];
    for (let y = 0; y <= Ylength - 1; y++) {
      let x = k - y;
      if (x >= 0 && x < Xlength) {
        result.push(letter[y][x]);
      }
    }
    if (result.length > 0) {
      let wordDiagonally = result.join('');
      if (wordDiagonally.includes(word)) return true;
    }
  }
  return false;
};

///all diagonall functions
const diagonally = (letters, word) => {
  const bottomLeft = diagonallyBottomLeft(letters, word);
  const bottomRight = diagonallyBottomRight(letters, word);
  const topRight = diagonallyTopRight(letters, word);
  const topLeft = diagonallyTopLeft(letters, word);
  return (bottomLeft || bottomRight || topRight || topLeft);
};


//wordsearch driver code
const wordSearch = (letters, word) => {
  const wordSearchHor = wordSearchHorizontal(letters, word);
  const wordSearchVer = wordSearchHorizontal(transpose(letters), word);
  const wordSearchRev = wordSearchHorizontal(wordSearchReverse(letters), word);
  const diagonallyword = diagonally(letters, word);
  // const checkDiagonally = diagonally(letters, word);
  if (wordSearchHor || wordSearchVer || wordSearchRev || diagonallyword) return true;
  return false;
};

module.exports = wordSearch;

