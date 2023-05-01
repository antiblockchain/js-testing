function reverseString (string) {
    let splitString = string.split("");

    let reverse = splitString.reverse();

    let reversedString = reverse.join("");
    return reversedString;
}





module.exports = reverseString;