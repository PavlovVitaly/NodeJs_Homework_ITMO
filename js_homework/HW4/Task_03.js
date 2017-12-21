function DeleteMinMax(){
    var inputArr = [12,4,3,10,1,20];
    var minElem = Math.min.apply(null, inputArr);
    var maxElem = Math.max.apply(null, inputArr);
    var filtered = inputArr.filter(NotMinOrMax(minElem, maxElem));
    alert(filtered);
}

function NotMinOrMax(min, max){
    var ResFunc = function(item){
        return !((item === min) || (item === max));
    };
    return ResFunc;
}

DeleteMinMax();
