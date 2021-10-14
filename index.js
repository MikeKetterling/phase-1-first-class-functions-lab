const returnFirstTwoDrivers = function (array) {
     return array.slice(0,2);
    }
const returnLastTwoDrivers = function (array) {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function () {
       return int * int;
    }

}

const fareDoubler = function (fare) {
    return fare * 2
}

const fareTripler = function (fare) {
    return fare * 3
}

const selectDifferentDrivers = (array, funn) => {
    return funn(array)
}


