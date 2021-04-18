var letters = ["a", "b", "c"];
var pressedkeys = [];
var chances = 9;
var wins = 0;
var losses = 0;
var randomletters = null

var chancesleftfunc = function () {
    document.querySelector("#chances").innerHTML = chances;
};

var randomlettersfunc = function () {
    randomletters = letters[Math.floor(Math.random() * letters.length)];
};

var pressedkeysfunc = function () {
    document.querySelector("#guesses").innerHTML = pressedkeys.join(", ");
};
var reset = function() {
    chances = 9;
    pressedkeys = [];
    randomlettersfunc();
    chancesleftfunc();
    pressedkeysfunc();
};
    document.onkeyup = function(e) {
    pressedkeysfunc();
    chancesleftfunc();
    chances--;
    var letter = e.key;
    pressedkeys.push(letter);
    if (letter === randomletters){
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        reset();
    };
    if (chances === 0){
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        reset();
    };
}

