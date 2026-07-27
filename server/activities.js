const activities = [
  {
    id: 1,
    type: "mcq",
    prompt: "What prints?",
    code: 'function greet() {\n  console.log("Hello!");\n}\n\ngreet();',
    options: ["Nothing", "Hello!", "greet", "Error"],
    sampleAnswer: "Hello!"
  },
  {
    id: 2,
    type: "mcq",
    prompt: "Which function correctly accepts a parameter called name?",
    options: [
      "function greet(name) {}",
      "function(name) greet {}",
      "greet function(name) {}",
      "function greet = (name) {}"
    ],
    sampleAnswer: "function greet(name) {}"
  },
  {
    id: 3,
    type: "mcq",
    prompt: "What prints?",
    code: 'function greet(name) {\n  console.log(`Hi ${name}!`);\n}\n\ngreet("Aang");',
    options: ["Hi name!", "Hi Aang!", 'greet("Aang")', "Error"],
    sampleAnswer: "Hi Aang!"
  },
  {
    id: 4,
    type: "mcq",
    prompt: "Which statement is true?",
    options: [
      "return sends a value back from a function",
      "console.log() ends the function",
      "return prints to the console",
      "console.log() stores a variable"
    ],
    sampleAnswer: "return sends a value back from a function"
  },
  {
    id: 5,
    type: "mcq",
    prompt: "Why doesn't this work as expected?",
    code: 'function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(4));',
    options: [
      "Functions cannot return numbers",
      "One argument is missing",
      "return should be console.log",
      "Parentheses are missing"
    ],
    sampleAnswer: "One argument is missing"
  },
  {
    id: 6,
    type: "mcq",
    prompt: "Which operator checks if two values are equal?",
    options: ["=", "==", "===", "+="],
    sampleAnswer: "=== (also == works, but === is the strict/best-practice check)"
  },
  {
    id: 7,
    type: "mcq",
    prompt: "Which comparison is TRUE?",
    options: ["7 > 10", "5 <= 5", "8 < 3", "9 != 9"],
    sampleAnswer: "5 <= 5"
  },
  {
    id: 8,
    type: "mcq",
    prompt: "What prints?",
    code: "console.log(12 >= 15);",
    options: ["true", "false", "12", "Error"],
    sampleAnswer: "false"
  },
  {
    id: 9,
    type: "mcq",
    prompt: "Which line compares two values?",
    options: ["score = 10;", "score === 10;", "score += 10;", "score++;"],
    sampleAnswer: "score === 10;"
  },
  {
    id: 10,
    type: "mcq",
    prompt: "What prints?",
    code: 'let age = 15;\n\nif (age >= 16) {\n  console.log("Can drive");\n} else {\n  console.log("Too young");\n}',
    options: ["Can drive", "Too young", "true", "Error"],
    sampleAnswer: "Too young"
  },
  {
    id: 11,
    type: "mcq",
    prompt: "Which if statement is correct?",
    options: [
      "if score > 10 {",
      "if (score > 10) {",
      "if score > 10 ()",
      "(score > 10) if {"
    ],
    sampleAnswer: "if (score > 10) {"
  },
  {
    id: 12,
    type: "mcq",
    prompt: "What prints?",
    code: 'let temperature = 65;\n\nif (temperature < 70) {\n  console.log("Wear a jacket");\n} else {\n  console.log("Wear shorts");\n}',
    options: ["Wear shorts", "Wear a jacket", "65", "Error"],
    sampleAnswer: "Wear a jacket"
  },
  {
    id: 13,
    type: "mcq",
    prompt: "What prints?",
    code: 'function isAdult(age) {\n  return age >= 18;\n}\n\nconsole.log(isAdult(20));',
    options: ["20", "Adult", "true", "false"],
    sampleAnswer: "true"
  },
  {
    id: 14,
    type: "mcq",
    prompt: "What is the mistake?",
    code: 'let score = 90;\n\nif (score = 100) {\n  console.log("Perfect!");\n}',
    options: [
      "Should use === instead of =",
      "The variable should be const",
      "if cannot compare numbers",
      "console.log() is wrong"
    ],
    sampleAnswer: "Should use === instead of ="
  },
  {
    id: 15,
    type: "mcq",
    prompt: "What prints?",
    code: 'let lives = 0;\n\nif (lives > 0) {\n  console.log("Keep playing");\n} else {\n  console.log("Game Over");\n}',
    options: ["Keep playing", "Game Over", "0", "false"],
    sampleAnswer: "Game Over"
  },
  {
    id: 16,
    type: "mcq",
    prompt: "What is the value of answer?",
    code: 'function multiply(a, b) {\n  return a * b;\n}\n\nlet answer = multiply(3, 4);',
    options: ["7", "12", "34", "undefined"],
    sampleAnswer: "12"
  },
  {
    id: 17,
    type: "mcq",
    prompt: "Which function is best written?",
    options: [
      "function square(num) { return num * num; }",
      "function square() { return 4; }",
      "function square(num) { console.log(num); }",
      "square(num) { return num; }"
    ],
    sampleAnswer: "function square(num) { return num * num; }"
  },
  {
    id: 18,
    type: "mcq",
    prompt: "What prints?",
    code: 'function checkScore(score) {\n  if (score >= 70) {\n    return "Pass";\n  }\n  return "Fail";\n}\n\nconsole.log(checkScore(68));',
    options: ["Pass", "Fail", "68", "true"],
    sampleAnswer: "Fail"
  },
  {
    id: 19,
    type: "mcq",
    prompt: "Which change fixes this function?",
    code: 'function greet(name) {\n  console.log("Hello, ${name}!");\n}',
    options: [
      "console.log(`Hello, ${name}!`);",
      'console.log("Hello, " + name + "!");',
      "Both A and B",
      "Neither A nor B"
    ],
    sampleAnswer: "Both A and B — either backtick interpolation or string concatenation works"
  },
  {
    id: 20,
    type: "mcq",
    prompt: "Which best describes a function parameter vs an argument?",
    options: [
      "A parameter is the placeholder in the function definition; an argument is the actual value passed in when calling it",
      "They mean exactly the same thing with no difference",
      "A parameter is only used for numbers; an argument is only used for strings",
      "An argument must be declared with let or const"
    ],
    sampleAnswer: "A parameter is the placeholder in the function definition; an argument is the actual value passed in when calling it"
  }
];

module.exports = activities;

/*const activities = [
  {
    id: 1,
    type: "this-or-that",
    prompt: "What happens to the button?",
    code: "button {\n  padding: 20px;\n}",
    optionA: "Space is added inside, between text and border",
    optionB: "Space is added outside, around the button",
    sampleAnswer: "optionA — padding adds space inside"
  },
  {
    id: 2,
    type: "this-or-that",
    prompt: "You want space between two cards. Choose one:",
    optionA: "margin",
    optionB: "padding",
    sampleAnswer: "optionA — margin creates space between elements"
  },
  {
    id: 3,
    type: "this-or-that",
    prompt: "Three cards should appear in a row, but this isn't working. What's wrong?",
    code: ".card {\n  display: flex;\n}",
    optionA: "flex should be on the parent container, not .card",
    optionB: "flex should be on each individual card",
    sampleAnswer: "optionA — flex belongs on the parent"
  },
  {
    id: 4,
    type: "this-or-that",
    prompt: "Which best describes padding?",
    optionA: "Space inside an element, between content and border",
    optionB: "Space outside an element, between it and its neighbors",
    sampleAnswer: "optionA"
  },
  {
    id: 5,
    type: "this-or-that",
    prompt: "To add 15px of margin to every element with class 'photo', which selector is correct?",
    code: ".photo {\n  margin: 15px;\n}",
    optionA: ".photo { margin: 15px; }",
    optionB: "#photo { margin: 15px; }",
    sampleAnswer: "optionA — . targets a class"
  },
  {
    id: 6,
    type: "this-or-that",
    prompt: "This container has three children. What usually happens?",
    code: ".container {\n  display: flex;\n}",
    optionA: "They line up in a row",
    optionB: "They stack vertically",
    sampleAnswer: "optionA — row is the default flex direction"
  },
  {
    id: 7,
    type: "this-or-that",
    prompt: 'Which selector styles <h1 id="main-title">Welcome</h1>?',
    optionA: ".main-title",
    optionB: "#main-title",
    sampleAnswer: "optionB — # targets an id"
  },
  {
    id: 8,
    type: "this-or-that",
    prompt: "You want to style every element with class 'card'. Which selector is correct?",
    code: "#card {\n  background-color: pink;\n}",
    optionA: ".card { background-color: pink; }",
    optionB: "#card { background-color: pink; }",
    sampleAnswer: "optionA — . targets a class, works on multiple elements"
  },
  {
    id: 9,
    type: "this-or-that",
    prompt: "What's the difference between margin and padding?",
    optionA: "Margin is outside the border; padding is inside",
    optionB: "Margin is inside the border; padding is outside",
    sampleAnswer: "optionA"
  },
  {
    id: 10,
    type: "this-or-that",
    prompt: "You want a button with 10px padding and 20px margin. Which CSS is correct?",
    code: "button {\n  padding: ?;\n  margin: ?;\n}",
    optionA: "button { padding: 10px; margin: 20px; }",
    optionB: "button { padding: 20px; margin: 10px; }",
    sampleAnswer: "optionA"
  },
  {
    id: 11,
    type: "this-or-that",
    prompt: "What direction do items appear in?",
    code: ".gallery {\n  display: flex;\n  flex-direction: column;\n}",
    optionA: "Stacked vertically (column)",
    optionB: "Lined up in a row",
    sampleAnswer: "optionA — flex-direction: column stacks vertically"
  },
  {
    id: 12,
    type: "this-or-that",
    prompt: "You want text to have more breathing room inside a card. Choose one:",
    optionA: "margin",
    optionB: "padding",
    sampleAnswer: "optionB — padding"
  },
  {
    id: 13,
    type: "this-or-that",
    prompt: 'To style <p class="intro">Welcome!</p> in purple, which is correct?',
    code: "#intro {\n  color: purple;\n}",
    optionA: ".intro { color: purple; }",
    optionB: "#intro { color: purple; }",
    sampleAnswer: "optionA — . targets the class"
  },
  {
    id: 14,
    type: "this-or-that",
    prompt: "In Flexbox, what is the parent/container?",
    optionA: "The element that wraps and holds the child elements",
    optionB: "Any element with text inside it",
    sampleAnswer: "optionA"
  },
  {
    id: 15,
    type: "this-or-that",
    prompt: "Which CSS turns .nav-links into a Flexbox container?",
    code: ".nav-links {\n  ?\n}",
    optionA: ".nav-links { display: flex; }",
    optionB: ".nav-links { flex: true; }",
    sampleAnswer: "optionA — display: flex; is the correct property/value"
  },
  {
    id: 16,
    type: "this-or-that",
    prompt: "Where does the extra space appear?",
    code: ".box {\n  margin: 30px;\n}",
    optionA: "Outside the box, around its border",
    optionB: "Inside the box, around its content",
    sampleAnswer: "optionA — margin is outside"
  },
  {
    id: 17,
    type: "this-or-that",
    prompt: "Five cards need the same style. Choose one:",
    optionA: "Give every card the same class",
    optionB: "Give every card the same ID",
    sampleAnswer: "optionA — classes are reusable, IDs should be unique"
  },
  {
    id: 18,
    type: "this-or-that",
    prompt: "You want 20px of space inside a button. Which is correct?",
    code: "button {\n  margin: 20px;\n}",
    optionA: "button { padding: 20px; }",
    optionB: "button { margin: 20px; }",
    sampleAnswer: "optionA — padding is space inside"
  },
  {
    id: 19,
    type: "this-or-that",
    prompt: "What does display: flex; do?",
    optionA: "Turns an element into a Flexbox container, changing how its children lay out",
    optionB: "Adds space around an element",
    sampleAnswer: "optionA"
  },
  {
    id: 20,
    type: "this-or-that",
    prompt: "A container has two child items that should line up in a row. What CSS makes that happen?",
    code: ".container {\n  ?\n}",
    optionA: ".container { display: flex; }",
    optionB: ".container { display: row; }",
    sampleAnswer: "optionA — display: flex; is the real property/value"
  }
];

module.exports = activities;

*/