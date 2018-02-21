/*eslint-env browser*/
var i;
for (i = 1; i <= 7; i += 1) {
    var i2;
    var line = "";
    for (i2 = 1; i2 <= i; i2 += 1) {
        line = line + "#";
    }
    window.console.log(line);
}