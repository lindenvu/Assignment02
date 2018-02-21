/*eslint-env browser*/
var coinFlip = Math.round(Math.random());
var choice = window.prompt("Input heads or tails");
var result;
var result2;
if (coinFlip) {
    result = "heads";
} else {
    result = "tails";
}
if (choice === result) {
    result2 = "win!";
} else {
    result2 = "lose!";
}
window.alert("The flip was " + result + " and you chose " + choice + "... you " + result2);
