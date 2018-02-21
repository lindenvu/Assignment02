/*eslint-env browser*/
var a = window.prompt("Enter a number");
var b = window.prompt("Enter another number");
if (parseInt(a, 10) >= parseInt(b, 10)) {
    window.document.write(a);
}
else {window.document.write(b);}