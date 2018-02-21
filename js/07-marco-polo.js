/*eslint-env browser*/
var i;
for (i = 1; i <= 100; i += 1) {
    if (!(i % 3)) {
        window.document.write("Marco!");
        if (!(i % 5)) {
            window.document.write(" Polo!<br>");
        } else { window.document.write("<br>"); }
    } else if (!(i % 5)) {window.document.write("Polo!<br>"); } else { window.document.write(i + "<br>"); }
}