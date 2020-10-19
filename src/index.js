const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let word = "";
  let str = "";
  expr.split("**********").forEach(function (item) {
    for (let j = 0; j < item.length; j += 10) {
      let letter_code = item.substring(j, j + 10);
      let letter_morse = "";

      for (let i = letter_code.indexOf("1"); i < letter_code.length; i += 2) {
        let symbol_code =
          letter_code[i] + letter_code[i + 1] == "10" ? "." : "-";
        letter_morse += symbol_code;
      }

      word += MORSE_TABLE[letter_morse];
    }

    str += word + " ";
    word = "";
  });
  return str.trim();
}

module.exports = {
  decode,
};
