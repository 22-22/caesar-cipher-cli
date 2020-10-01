function encode(input, shift) {
    let res = '';
    for (let i = 0; i < input.length; i++) {
        if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
            res += String.fromCharCode((input.charCodeAt(i) + shift - 65) % 26 + 65)
        } else if ((input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122)) {
            res += String.fromCharCode((input.charCodeAt(i) + shift - 97) % 26 + 97)
        } else res += input[i]
    }
    return res;
}

function decode(input, shift) {
    let res = '';
    for (let i = 0; i < input.length; i++) {
        if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
            res += String.fromCharCode((input.charCodeAt(i) - shift - 90) % 26 + 90)
        } else if ((input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122)) {
            res += String.fromCharCode((input.charCodeAt(i) - shift - 122) % 26 + 122)
        } else res += input[i]
    }
    return res;
}

module.exports = {
    encode, decode
}