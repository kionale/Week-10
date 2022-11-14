// condition ? <expression if true> : <expression if false>

function priceDisplay(isMember) {
    return (isMember ? '$6.00' : '$15');
}

console.log(priceDisplay(true));

var message = "";
console.log(canDrive(15));
function canDrive(age) {
    return (age >= 16 ? message = ' you can drive' : message = 'you can not drive');
}