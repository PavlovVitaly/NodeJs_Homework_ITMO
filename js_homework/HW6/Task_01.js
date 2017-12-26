function StudentTask(){
    student = {
        name: "Иван",
        lastname: "Иванов",
        age: 25,
        hobby: ["футбол", "плавание", "рисование"],
        education_place: "ИТМО"
    };

    student.GetAgeToString = function(){
        var ageStr = this.age.toString();
        var lastNum = parseInt(ageStr[ageStr.length-1]);

        var res = ageStr;

        if(lastNum === 0){res+=" лет";}
        else if(this.age>10 && this.age<20){res+=" дней";}
        else if(lastNum === 1){res+=" год";}
        else if(lastNum >= 2 && lastNum <= 4){res+=" года";}
        else if(lastNum >= 5 && lastNum <= 9){res+=" лет";}
        return res;
    };

    student.toString = function(){
        var hobbyStr = "";
        var numElem = this.hobby.length-1;
        for(var item in this.hobby){
            hobbyStr += this.hobby[item];
            if(item != numElem){hobbyStr += ", ";}
        }
        var str = this.name + " " + this.lastname + ". " + this.GetAgeToString() + ". Интересы: " + hobbyStr + ". Учится в " + this.education_place + ".";
        return str;
    };
    PrintContentOfStudent(student);
}

function PrintContentOfStudent(student){
    alert(student.toString());
}

StudentTask();
