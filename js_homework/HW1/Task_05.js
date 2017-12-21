function FindPair(){
    var inputStr = prompt("Введите последовательность чисел (через пробел)");
    var inputArr = Format(inputStr);
    if(DoesItHavePair(inputArr)){
        alert("Есть пара равных чисел.");
    }else{
        alert("Нет пары равных чисел.");
    }
}

function Format(inputStr){
    inputStr.replace(/^\s*(.*)\s*$/, '$1');
    var inputArr = inputStr.split(" ");
    inputArr = inputArr.map(function(item) {return Number(item);});
    return inputArr;
}

function DoesItHavePair(Arr){
    for(var i = 0; i < Arr.length - 1; i++){
        for(var j = i + 1; j < Arr.length; j++){
            if(Arr[i] === Arr[j]){
                return true;
            }
        }
    }
    return false;
}

FindPair();
