/*eslint-env browser*/
var points;
var average = 0;
window.document.write("Student(s):&nbsp;&nbsp;&nbsp;Grade<br>--------------------------<br>");
function getGrade(name) {
    points = parseInt(window.prompt("Enter the points for " + name), 10);
    average += points;
    if (points >= 90) { 
        window.document.write(name + ":&nbsp;&nbsp;&nbsp;A<br>");
    } else if (points >= 80) {
        window.document.write(name + ":&nbsp;&nbsp;&nbsp;B<br>");
    } else if (points >= 70) {
        window.document.write(name + ":&nbsp;&nbsp;&nbsp;C<br>");
    } else if (points >= 60) {
        window.document.write(name + ":&nbsp;&nbsp;&nbsp;D<br>");
    } else {
        window.document.write(name + ":&nbsp;&nbsp;&nbsp;F<br>");
    }
}
getGrade("Ursula");
getGrade("Paul");
getGrade("Henry");
getGrade("Tabitha");
getGrade("Lucy");
window.document.write("--------------------------<br>Average Points:&nbsp;&nbsp;&nbsp" + average / 5);