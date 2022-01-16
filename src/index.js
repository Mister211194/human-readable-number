module.exports = function toReadable(number) {

    let oneToNineteen = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen']

    let twentyToNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'];


    if (number === 0) return 'zero';


    if (number < 20) {
        return oneToNineteen[number - 1];
    }

    // от 20 до 99
    if (number.toString().length === 2 && number.toString()[1] === '0') {
        return (`${twentyToNinety[number.toString()[0] - 2]}`);
    }

    if (number.toString().length === 2 && number.toString()[1] !== '0') {
        return (`${twentyToNinety[number.toString()[0] - 2]} ${oneToNineteen[number.toString()[1] - 1]}`);
    }

    // от 100 до 999
    if (number.toString().length === 3) {
        if (number.toString()[1] === '0' && number.toString()[2] === '0') {
            return `${oneToNineteen[number.toString()[0] - 1]} hundred`;
        }
        else {
            return `${oneToNineteen[number.toString()[0] - 1]} hundred ${toReadable(+((number.toString()[1]) + (number.toString()[2])))}`;
        }
    }
}
