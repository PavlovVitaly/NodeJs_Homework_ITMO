function Days(){
    var days = prompt("Введите количество дней");
    var daysInt = parseInt(days);
    if(isNaN(daysInt)){alert("Невалидный ввод");}
    var lastNum = parseInt(days[days.length-1]);

    var res = days;

    if(lastNum === 0){res+=" дней";}
    else if(daysInt>10 && daysInt<20){res+=" дней";}
    else if(lastNum === 1){res+=" день";}
    else if(lastNum >= 2 && lastNum <= 4){res+=" дня";}
    else if(lastNum >= 5 && lastNum <= 9){res+=" дней";}

    alert(res);
}

Days();
