function SumNum() {
    var inputNum = prompt("������� ����� �����");
    if (!isValidInputNum(inputNum)) {
        alert("���������� ����");
        return;
    }
    var inputArr = inputNum.split('');
    var sum = inputArr.reduce(function (sum, currentValue) { return parseInt(sum) + parseInt(currentValue); }, 0);
    alert(sum);
    return;
}

function isValidInputNum(inputNum) {
    var numIn = Number(inputNum);
    if (isNaN(numIn)) {
        return false;
    }
    var intIn = parseInt(inputNum);
    if (numIn != intIn) {
        return false;
    }
    return true;
}

SumNum();
