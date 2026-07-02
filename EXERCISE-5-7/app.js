
var num1 = 13;
var num2 = 9;
var sum = num1 + num2;

alert("Sum of " + num1 + " and " + num2 + " is " + sum);

var num1 = 13;
var num2 = 9;
var subtraction = num1 - num2;

alert("Result of subtracting " + num2 + " from " + num1 + " is " + subtraction);


var multiplication = num1 * num2;

alert("Result of multiplying " + num1 + " and " + num2 + " is " + multiplication);


var division = num1 / num2;

alert("Result of dividing " + num1 + " by " + num2 + " is " + division);


var modulus = num1 % num2;

alert("Remainder of dividing " + num1 + " by " + num2 + " is " + modulus);


 var num;

document.write("Value after variable declaration is: " + num + "<br>");

num = 5;
document.write("Initial value: " + num + "<br>");

num++;
document.write("Value after increment is: " + num + "<br>");

num = num + 8;
document.write("Value after addition is: " + num + "<br>");

num--;
document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;
document.write("The remainder is: " + remainder);


var ticketPrice = 600;
var totalTickets = 5;
var totalCost = ticketPrice * totalTickets;

document.write("Total cost to buy " + totalTickets + " tickets to a movie is " + totalCost + " PKR");


var number = 7;

document.write("Multiplication table of " + number + "<br><br>");
document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10));



var celsius = 12;
var fahrenheit = (celsius * 9 / 5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F");
document.write("<br>");

var fahrenheit2 = 68;
var celsius2 = (fahrenheit2 - 32) * 5 / 9;

document.write(fahrenheit2 + "°F is " + celsius2 + "°C");



var item1 = 560;
var item2 = 200;
var quantity1 = 2;
var quantity2 = 5;
var shipping = 150;

var total = (item1 * quantity1) + (item2 * quantity2) + shipping;

document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + quantity1 + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 2 is " + quantity2 + "<br>");
document.write("Shipping Charges " + shipping + "<br><br>");
document.write("Total cost of your order is " + total);


var totalMarks = 1200;
var obtainedMarks = 900;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1><br>");
document.write("Total marks : " + totalMarks + "<br>");
document.write("Marks obtained : " + obtainedMarks + "<br>");
document.write("Percentage : " + percentage + "%");


var usDollar = 10;
var saudiRiyal = 25;

var total = (usDollar * 104) + (saudiRiyal * 28);


document.write("<h1>Currency in PKR</h1><br>");
document.write("Total currency in PKR : " + total);


var num = 2;

var result = ((num + 5) + 10) / 2

var num = 2;

var result = ((num + 5) * 10) / 2;

alert(result);


var result = ((2 + 5) * 10) / 6;

alert(result);


 
var currentYear = 2015;
var birthYear = 1992;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h1>The Age Calculator</h1><br>");
document.write("Current Year : " + currentYear + "<br>");
document.write("Birth Year : " + birthYear + "<br><br>");
document.write("They are either " + age2 + " or " + age1 + " years old");



var radius = 12;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h1>The Geometrizer</h1><br>");
document.write("Radius of a circle : " + radius + "<br>");
document.write("The circumference is : " + circumference + "<br>");
document.write("The area is : " + area);


var a = 20;

document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write("----------------------------<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a);



var a = 2, b = 1;

var result = --a - --b + ++b + b--;

document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result);



var snack = "Oreo biscuits";
var currentAge = 15;
var maxAge = 85;
var perDay = 2;

var total = (maxAge - currentAge) * 365 * perDay;

document.write("<h2>The Lifetime Supply Calculator</h2>");
document.write("Favorite Snack: " + snack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + perDay + "<br><br>");
document.write("You will need " + total + " " + snack + " to last you until the ripe old age of " + maxAge + ".");

