/*eslint-env browser*/
var coinFlip;
do {
    coinFlip = Math.round(Math.random());
    if (coinFlip) {
        window.console.log("Tails");
    } else {window.console.log("Heads"); }
} while (!coinFlip);