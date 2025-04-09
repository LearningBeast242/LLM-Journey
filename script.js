
// Roman to Number
function convertRoman() {
  const roman = document.getElementById("romanInput").value.toUpperCase();
  const romanResult = document.getElementById("romanResult");

  const romanMap = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let total = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const current = roman[i];
    const value = romanMap[current];

    if (!value) {
      romanResult.innerHTML = "❌ Invalid Roman numeral!";
      return;
    }

    if (value < prevValue) {
      total -= value;
    } else {
      total += value;
    }

    prevValue = value;
  }

  romanResult.innerHTML = `✅ Value: <strong>${total}</strong>`;
}

// Number to Roman
function convertNumber() {
  const num = parseInt(document.getElementById("numberInput").value);
  const numberResult = document.getElementById("numberResult");

  if (isNaN(num) || num < 1 || num > 3999) {
    numberResult.innerHTML = "❌ Please enter a number between 1 and 3999.";
    return;
  }

  const map = [
    { val: 1000, sym: "M" },
    { val: 900, sym: "CM" },
    { val: 500, sym: "D" },
    { val: 400, sym: "CD" },
    { val: 100, sym: "C" },
    { val: 90, sym: "XC" },
    { val: 50, sym: "L" },
    { val: 40, sym: "XL" },
    { val: 10, sym: "X" },
    { val: 9, sym: "IX" },
    { val: 5, sym: "V" },
    { val: 4, sym: "IV" },
    { val: 1, sym: "I" },
  ];

  let result = "";
  let n = num;

  for (const { val, sym } of map) {
    while (n >= val) {
      result += sym;
      n -= val;
    }
  }

  numberResult.innerHTML = `✅ Roman: <strong>${result}</strong>`;
}
