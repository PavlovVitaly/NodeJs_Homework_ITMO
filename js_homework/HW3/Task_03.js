function MakeDoubleSign() {
    var inputStr = prompt("������� ������");
    var replacedSign = prompt("������� ����������� ������");
    var reg = new RegExp(replacedSign, 'g');
    var outputStr = inputStr.replace(reg, replacedSign + replacedSign);
    alert(outputStr);
    return;
}

MakeDoubleSign();
