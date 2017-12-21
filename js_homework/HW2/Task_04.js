function ConverterToMeters() {
    var units = parseInt(prompt("������� ������� ���������:\n1 � ��������\n2 � ��������\n3 � ����\n4 � ���������\n5 � ���������"));
    if (!IsValidUnits(units)) {
        alert("���������� ���� ������ ���������");
        return;
    }
    var val = Number(prompt("������� �����"));
    if (!IsValidValue(val)) {
        alert("���������� ���� �����");
        return;
    }
    var result = GetCoeff(units) * val;
    alert(result + "�");
}

function IsValidUnits(units) {
    if (isNaN(units) || units < 1 || units > 5) {
        return false;
    }
    return true;
}

function IsValidValue(val) {
    if (val < 0) {
        return false;
    }
    return true;
}

function GetCoeff(units) {
    var coeff = [0.1, 1000, 1, 0.001, 0.01];
    return coeff[units - 1];
}

ConverterToMeters();
