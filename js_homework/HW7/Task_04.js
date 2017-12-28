function TestCaesarCipher() {
    var phrase = prompt("Введите кодируемую фразу");
    var shift = prompt("Введите смещение");
    shift = parseInt(shift);
    if (isNaN(shift)) {
        alert("Невалидный ввод");
        return;
    }
    var codePhrase = GetCaesarCipherCodePhrase(phrase, shift);
    var decodePhrase = GetDecodePhrase(codePhrase, shift);
    alert("Исходная фраза: " + phrase + "\nШифрованая фраза: " + codePhrase + "\nДекодированная фраза: " + decodePhrase);
}

function GetCaesarCipherCodePhrase(phrase, shift) {
    var index = 0;
    var alphabet = MakeAlphabet();
    var codePhrase = [];
    for (var i = 0; i < phrase.length; i++) {
        index = (alphabet.indexOf(phrase[i]) + shift) % alphabet.length;
        codePhrase.push(alphabet[index]);
    }
    return codePhrase.join("");
}

function GetDecodePhrase(phrase, shift) {
    var index = 0;
    var alphabet = MakeAlphabet();
    var decodePhrase = [];
    var length = alphabet.length;
    for (var i = 0; i < phrase.length; i++) {
        index = (alphabet.indexOf(phrase[i]) - shift + length) % length;
        decodePhrase.push(alphabet[index]);
    }
    return decodePhrase.join("");
}

function MakeAlphabet() {
    return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZабвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789 ";
}

TestCaesarCipher();
