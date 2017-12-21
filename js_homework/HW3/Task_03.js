function MakeDoubleSign() {
    var inputStr = prompt("¬ведите строку");
    var replacedSign = prompt("¬ведите удваеваемый символ");
    var reg = new RegExp(replacedSign, 'g');
    var outputStr = inputStr.replace(reg, replacedSign + replacedSign);
    alert(outputStr);
    return;
}

MakeDoubleSign();
