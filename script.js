const display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  if (op === 'π') 
  {
    display.value += Math.PI.toFixed(8);
  } else 
  {
    display.value += op;
  }
}

function appendFunction(func) {
  if (func === 'sqrt') {
    display.value += "Math.sqrt(";
  } else if (func === 'log') {
    display.value += "Math.log10(";
  } else {
    display.value += Math.$(func);
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expr = display.value.replace(/\^/g, '');
    let result = eval(expr);
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}

// Optional: Add keyboard support
document.addEventListener('keydown', function (e) {
  const key = e.key;

  if (!isNaN(key) || "+-*/().".includes(key)) {
    display.value += key;
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});