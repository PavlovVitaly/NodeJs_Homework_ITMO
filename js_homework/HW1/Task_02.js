function DescriptionOfNumber(){
    var input_str = prompt("Введите целое число от -999 до 999");
    var output_str = Format(input_str);
    if(isNaN(output_str)){
        alert("Введенная строка не является числом");
        return;
    }
    output_str = GetDescription(output_str);
    alert(output_str);
}

function Format(input_str){
    input_str.replace(/^\s*(.*)\s*$/, '$1');
    input_number = Number(input_str);
    return input_number;
}

function GetDescription(input_number){
    var dimDict = [];
    dimDict[1] = "однозначное";
    dimDict[2] = "двузначное";
    dimDict[3] = "трехзначное";

    var output_str = GetSign(input_number);
    if(output_str === 0){
        return "нулевое число";
    }
    var dim = (Math.abs(input_number)).toString().length;
    if(dim > 3){
        return "Число имеет больше трех разрядов";
    }
    output_str = output_str + " " + dimDict[dim] + " " + "число";
    return output_str;
}

function GetSign(input_number){
    if(input_number > 0){
        return "положительное";
    }else if(input_number < 0){
        return "отрицательное";
    }else{
        return 0;
    }
}

DescriptionOfNumber();
