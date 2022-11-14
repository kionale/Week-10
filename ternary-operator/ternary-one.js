// condition ? <expression if true> : <expression if false>

function priceDisplay(isMember) {
    return (isMember ? '$6.00' : '$15');
}

console.log(priceDisplay(true));