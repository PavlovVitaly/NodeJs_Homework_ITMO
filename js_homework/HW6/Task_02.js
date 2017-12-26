function TestFactorial(){
    var n = prompt("Введите число");
    n = parseInt(n);
    if(isNaN(n)){alert("Невалидный ввод");return;}
    alert("Факториал " + n + " равен: " + GetFactorial(n));
}

function GetFactorial(n){
    if(n===1){return 1;}
    return n*GetFactorial(n-1);
}

TestFactorial();
