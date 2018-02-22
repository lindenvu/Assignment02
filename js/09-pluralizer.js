/*eslint-env browser*/
var quantity = parseInt(window.prompt("Enter a number:"), 10);
var animal = window.prompt("Enter an animal:");
if (quantity - 1) {
    if (animal === "sheep") {
        window.document.write(quantity + " sheep");
    } else if (animal === "goose") {
        window.document.write(quantity + " geese");
    } else if (animal === "ass") {
        window.document.write(quantity + " asses");
    } else {window.document.write(quantity + " " + animal + "s"); }
} else {window.document.write("1 " + animal); }