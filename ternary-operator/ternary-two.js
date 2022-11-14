function pass() {
    console.log('You passed');
}

function fail() {
    console.log('Your failed');
}

var checkGrade = true;
checkGrade ? pass() : fail();

var checkGrade = 51;
checkGrade > 50 ? pass() : fail();
