var students = [["Martin", 76], ["Thomas", 85], ["Klaus", 65], ["Maria", 93],["David", 81] ]

/**var thomas = 85;
var klaus = 65;
var maria = 93;
var david = 81;**/
for(var i = 0 ; i < students.length ; i++){


if (students [i][1]> 90) {
	console.log ("The student " +[i][0] + " has a grade A")
}
else if (students[i][1]< 90 && students[i][1] > 80) {
	console.log ("The student " +[i][0] + " has a grade B")
}
else if (students[i][1]< 80 && students[i][1] > 70) {
	console.log ("The student " +[i][0] + " has a grade C")
}
else if (students[i][1]< 70) {
	console.log ("The student " +[i][0] + " has a grade D")
}
}

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

if (avg > 90) {
	console.log ("The class average is " + avg + " and the grade is A")
}
else if (avg < 90 && avg > 80) {
	console.log ("The class average is " + avg + " and the grade is B")
}
else if (avg < 80 && avg > 70) {
	console.log ("The class average is " + avg + " and the grade is C")
}
else if (avg < 70) {
	console.log ("The class average is " + avg + " and the grade is D")
}

