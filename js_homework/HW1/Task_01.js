function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

function min(arr){
    if(arr.length <= 0){
        throw "arr.length <= 0";
    }

    arr.sort(compareNumeric);
    return arr[0];
}

function minNum(){
    var inputString = prompt("Введите последовательность чисел (через пробел).");
    var temp = inputString.split(" ");
    var arr = new Array();
    for(var i = 0; i < temp.length; i++){
        var elem = Number(temp[i]);
        if(isNaN(elem)){
            continue;
        }
        arr.push(Number(temp[i]));
    }

    alert(min(arr));
}

minNum();



