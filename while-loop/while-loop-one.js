var proceed = true;
var i = 0;

while (proceed) {
    i++;
    if (i == 3) {
        // proceed = false; or break;
        break; 
        // using break to break out of this while loop so no need to change the conition of proceed
    }
}

console.log(i);

var i = 0;
var num = 5;
while (i < num) {
    i++;
    console.log(i);
}

var i = 0;
while (proceed) {
    i += 2;
    if (i > 9) {
        break;
    }
}
console.log(i);
// 2 4 6 8 10

//wrong example -> Infinite loop for not updating the value of i
var i = 0;
var max = 5;
while (i < max) {
    console.log(i);
    i++;
}
//0 1 2 3 4 