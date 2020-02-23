module.exports = function toReadable (number) {
    const nameNumberArray = [
        ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
        "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],

        ["twenty", "thirty", "forty", "fifty", "sixty","seventy", "eighty", "ninety"],

        ["one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred",
        "seven hundred", "eight hundred", "nine hundred"]
    ]

    if (number < 20) {
        return nameNumberArray[0][number];
    }

    if (number >= 100) {
        return (nameNumberArray[2][Number((" " + number).substr(1, 1)) - 1] + " " + checkZero(Number((" " + number).substr(2,2)))).trim();

        function checkZero(item) {
            if (item === 0) {
                return "";
            } else {
                return toReadable(Number((" " + number).substr(2,2)));
            }
        }
    }

    const firstNumber = nameNumberArray[1][Number((" " + number).substr(1, 1)) - 2];
    const secondNumber = (number % 10) ? nameNumberArray[0][number % 10]: "";

    return (firstNumber + " " + secondNumber).trim();
}
