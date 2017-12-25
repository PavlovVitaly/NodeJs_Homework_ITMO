function StudentTask(){
    student = {
        name: "Ivan",
        lastname: "Ivanov",
        age: 25,
        hobby: ["football", "swiming", "art"],
        education_place: "School"
    };
    student.toString = function(){
        var str = "";
        for(var item in this){
            str+=item + ": " + this[item] + ";\n";
        }
        return str;
    };
    PrintContentOfStudent(student);
}

function PrintContentOfStudent(student){
    alert(student.toString());
}

StudentTask();
