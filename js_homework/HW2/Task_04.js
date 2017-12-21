function ConverterToMeters() {
    var units = parseInt(prompt("¬ведите единицы измерени€:\n1 Ч дециметр\n2 Ч километр\n3 Ч метр\n4 Ч миллиметр\n5 Ч сантиметр"));
    if (!IsValidUnits(units)) {
        alert("Ќевалидный ввод единиц измерени€");
        return;
    }
    var val = Number(prompt("¬ведите длину"));
    if (!IsValidValue(val)) {
        alert("Ќевалидный ввод длины");
        return;
    }
    var result = GetCoeff(units) * val;
    alert(result + "м");
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
