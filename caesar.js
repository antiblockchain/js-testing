
function caesar (string, amount) {
    if (amount < 0 ) {
        return caesar(str, amount + 26);
    }

    let returned = "";

    for(let i = 0; i < string.length; i++) {
        let char = string[i];

        if (char.match(/[a-z]/i)) {
            let code = string.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + amount) %26) + 65);
            }
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }
        returned += char;
    }

    return returned;
}


module.exports = caesar;