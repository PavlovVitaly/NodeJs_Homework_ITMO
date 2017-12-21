function CalcSeason() {
    var month = prompt("Введите номер месяца");
    month = Format(month);
    if (isNaN(month)) {
        alert("Невалидный ввод");
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
            return "Весна";
            break;
        case 2:
            return "Лето";
            break;
        case 3:
            return "Осень";
            break;
        default:
            return "Зима";
            break;
    }
}

CalcSeason();
