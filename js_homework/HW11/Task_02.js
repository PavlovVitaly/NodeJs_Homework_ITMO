function StudentTask() {
    function Person(name, age, sex, hobby) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.hobby = hobby;
    }

    Person.prototype = {
        GetAgeToString: function () {
            var ageStr = this.age.toString();
            var lastNum = parseInt(ageStr[ageStr.length - 1]);

            var res = ageStr;

            if (lastNum === 0) {
                res += " лет";
            }
            else if (this.age > 10 && this.age < 20) {
                res += " дней";
            }
            else if (lastNum === 1) {
                res += " год";
            }
            else if (lastNum >= 2 && lastNum <= 4) {
                res += " года";
            }
            else if (lastNum >= 5 && lastNum <= 9) {
                res += " лет";
            }
            return res;
        },
        toString: function () {
            var hobbyStr = "";
            var numElem = this.hobby.length - 1;
            for (var item in this.hobby) {
                hobbyStr += this.hobby[item];
                if (item != numElem) {
                    hobbyStr += ", ";
                }
            }
            var str = "Человек: " + this.name + ". Возраст: " + this.GetAgeToString() + ". Пол: " + this.sex + ". Интересы: " + hobbyStr + ".";
            return str;
        }
    };

    Student.prototype.__proto__ = Person.prototype;

    function Student(name, age, sex, hobby, university, teacher) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.hobby = hobby;
        this.university = university;
        this.teacher = teacher;
    }

    Student.prototype.toString = function () {
        var hobbyStr = "";
        var numElem = this.hobby.length - 1;
        for (var item in this.hobby) {
            hobbyStr += this.hobby[item];
            if (item != numElem) {
                hobbyStr += ", ";
            }
        }
        var str = "Студент: " + this.name + ". Возраст: " + this.GetAgeToString() + ". Пол: " + this.sex + ". Интересы: " + hobbyStr + ". Обучается в " + this.university + ". Куратор: " + this.teacher + ".";
        return str;
    };

    PrintContent(new Person("Иван", 25, "м", ["плавание", "бег", "чтение"]));
    PrintContent(new Student("Максим", 20, "м", ["программирование", "лыжи", "гитара"], "ИТМО", "Петров"));
}

function PrintContent(obj) {
    alert(obj);
}

StudentTask();
