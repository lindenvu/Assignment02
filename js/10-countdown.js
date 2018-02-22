/*eslint-env browser*/
var quantity = parseInt(window.prompt("Enter a number:"), 10);
var i;
for (i = quantity; i >= 0; i -= 1) {
    window.document.write(i + "<br>");
}