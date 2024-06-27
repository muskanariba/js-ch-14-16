// var studentsnames = []; //empty arrray using JS literal notation //q1
// var a = {
//   namesofstudents: "", //  empty array using JS object notation
// };

var classnames = ["aliza", "sana", "bisma", "sobia", "rija", "rooba", "kashaf"]; //string array //q3
document.write(classnames + "<br/>");

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; //q4
document.write(num + "<br/>");

var boolean = [3, undefined, null, true, false]; //q5
document.write(boolean + "<br/>");

var mixed = [3, null, true, "hello", "hira", undefined, 7]; //q6
document.write(mixed + "<br/>");

var qualification = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "Mphil", "Phd"]; //q7
document.write(qualification[0] + "<br/>");
document.write(qualification[1] + "<br/>");
document.write(qualification[2] + "<br/>");
document.write(qualification[3] + "<br/>");
document.write(qualification[4] + "<br/>");
document.write(qualification[5] + "<br/>");
document.write(qualification[6] + "<br/>");
document.write(qualification[7] + "<br/>");

var names = ["Tony", "Michael", "John"]; //q8
var scores = [480, 320, 230];
var tony = (480 / 500) * 100;
var michael = (320 / 500) * 100;
var john = (230 / 500) * 100;
document.write(
  "Score of " +
    names[1] +
    " is " +
    scores[1] +
    ". " +
    "Perrcentage:" +
    michael +
    "%" +
    "<br/>"
);
document.write(
  "Score of " +
    names[2] +
    " is " +
    scores[2] +
    ". " +
    "Perrcentage:" +
    john +
    "%" +
    "<br/>"
);
document.write(
  "Score of " +
    names[0] +
    " is " +
    scores[0] +
    ". " +
    "Perrcentage:" +
    tony +
    "%" +
    "<br/>"
);
var arr = ["black", "blue", "red"];
document.write("array of colors :" + arr + "<br>");
var color = prompt("what color you wants in begining");
arr.unshift(color);
document.write("user choice color in starting : " + arr + "<br>");
var color2 = prompt("what color you wants in the end");
arr.push(color2);
document.write("user choice color in the end : " + arr + "<br>");
arr.unshift("lilac", "lavender", "mint");
document.write(" more colors in the begining : " + arr + "<br>");
arr.shift();
document.write("deleted 2 color from start : " + arr + "<br>");
arr.pop();
document.write("deleted 2 color from end : " + arr + "<br>");
var s = +prompt("at which index number you want to add color");
var b = prompt("please enter color name at your desired index number");
var newarr = s + b;
arr.splice(s, 0, b);

document.write("added colors of user choice at desire index : " + arr + "<br>");

var s = +prompt("at which index number you want to delete color");
var b = prompt("please enter how many color you want to delete");
arr.splice(s, b);

document.write(
  "deleted color of user choice at desired index : " + arr + "<br>"
);

var score = [320, 230, 480, 120]; //q10
document.write(
  score[2] + ",",
  score[0] + ",",
  score[1] + ",",
  score[3] + "<br/>"
);
document.write(
  score[3] + ",",
  score[1] + ",",
  score[0] + ",",
  score[2] + "<br/>"
);

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar" + "<br/>"]; //q11
document.write("Cities names : " + cities);
document.write("Selected cities:" + cities[3] + "," + cities[2] + "<br/>");

var arr = [" This ", " is ", " my ", " cat "]; //q12
document.write(arr.join("") + "<br>");

var mob = ["apple", "samsung", "motorola", "nokia", "sony", "haier"];
document.write(
  mob[0] +
    "<br/>" +
    mob[1] +
    "<br/>" +
    mob[2] +
    "<br/>" +
    mob[3] +
    "<br/>" +
    mob[4] +
    "<br/>" +
    mob[5] +
    "<br/>"
);

var a = ["keyboard", "mouse", "printer", "monitor"];
document.write(a[0] + "<br>");
document.write(a[1] + "<br>");
document.write(a[2] + "<br>");
document.write(a[3] + "<br>");
document.write(a[3] + "<br>");
document.write(a[2] + "<br>");
document.write(a[1] + "<br>");
document.write(a[0] + "<br>");
