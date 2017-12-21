function CalcSeason() {
    var month = prompt("������� ����� ������");
    month = Format(month);
    if (isNaN(month)) {
        alert("���������� ����");
        return;
    }
    var season = GetSeason(month);
    alert(season);
}

function Format(numOfMonth) {
    numOfMonth = parseInt(numOfMonth);
    if (numOfMonth < 1 || numOfMonth > 12) {
        return NaN;
    }
    return numOfMonth;
}

function GetSeason(numOfMonth) {
    var numOfSeason = Math.floor(numOfMonth / 3);
    switch (numOfSeason) {
        case 1:
            return "�����";
            break;
        case 2:
            return "����";
            break;
        case 3:
            return "�����";
            break;
        default:
            return "����";
            break;
    }
}

CalcSeason();
