function DescriptionOfNumber(){
    var input_str = prompt("Введите цифру от 0 до 9");
    var output_str = Format(input_str);
    if(isNaN(output_str)){
        alert("Введенная строка не является числом");
        return;
    }
    output_str = GetDescription(output_str);
    if(!output_str){
        alert("Ошибка! Введена не цифра");
        return;
    }
    alert(output_str);
}

function Format(input_str){
    input_str.replace(/^\s*(.*)\s*$/, '$1');
    input_number = Number(input_str);
    return input_number;
}

function GetDescription(input_number){
    var dimDict = ["ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    return dimDict[input_number];
}

DescriptionOfNumber();
