const activities = [
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