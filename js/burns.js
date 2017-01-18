const quoteText = document.getElementById("quoteText");
const character = document.getElementById("character");
const episode = document.getElementById("episode");
const quoteButton = document.getElementById("quoteButton");
const tweetButton = document.getElementById("tweetButton");

const quotes = [
  [
    "Friends, Family, Religion. These are the demons you must slay in order to succeed in business.",
    "Mr. Burns",
    "The Old Man and the Lisa"
  ],
  [
    "Eternal happiness for one dollar?  I'd be happier with the dollar.",
    "Mr. Burns, on the promise of Happy Dude",
    "Lisa's Date with Density"
  ],
  [
    "I should be able to run over as many kids as I want",
    "Mr. Burns",
    "Bart Gets Hit by a Car"
  ],
  [
    "So, you're a baby, huh?  How's that working out for you?",
    "<a href='https://youtu.be/n_GKsP0GV3c?t=8s'>Mr. Burns, to baby Waylon Smithers</a>",
    "The Blunder Years"
  ],
  [
    "For once, the rich white man is in control",
    "Mr. Burns, on giving electricity to the city",
    "The Simpsons Movie"
  ],
  [
    "Slow down there, maestro.  There's a <i>New</i> Mexico?",
    "<a href='https://www.youtube.com/watch?v=hEJzXbqyU8A'>Mr. Burns </a>",
    "Homer vs. Dignity"
  ],
  [
    "Honestly, Smithers, I don't know why Harvard even bothers to show up. They barely even won.",
    "Mr. Burns, on his alma mater, Yale, playing Harvard football",
    "Burns, Baby Burns"
  ]
];

// phased these named functions out so that I could practice using arrow functions in ES6
// const generateQuote = function() {
//   let newRandom = Math.floor(Math.random() * (quotes.length));
//   if (newRandom == randomNum) generateQuote();
//   randomNum = newRandom;
//   quoteText.innerHTML = quotes[randomNum][0];
//   character.innerHTML = quotes[randomNum][1];
//   episode.innerHTML = quotes[randomNum][2];
//   console.log("button was pressed");
// };
//
// const generateTweet = function() {
//   window.open("http://twitter.com/home/?status=" + quoteText.innerHTML + "  --Mr. Burns");
// }

quoteButton.addEventListener("click", () => {
  let newRandom = Math.floor(Math.random() * (quotes.length));
  randomNum = newRandom;
  quoteText.innerHTML = quotes[randomNum][0];
  character.innerHTML = quotes[randomNum][1];
  episode.innerHTML = quotes[randomNum][2];
  console.log("button was pressed");
});
tweetButton.addEventListener("click", () => {
  window.open("http://twitter.com/home/?status=" + quoteText.innerHTML + "  --Mr. Burns");
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
