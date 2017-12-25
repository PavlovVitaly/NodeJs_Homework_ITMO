function FibonacciNumbers(){
    alert(GetFibonacciNumbers(10));
}

function GetFibonacciNumbers(num){
    if(num < 0 || isNaN(num)){
        return NaN;
    }

    var prev = 0;
    var resArr=[prev];
    if(num === 0){return resArr;}

    var cur = 1;
    resArr.push(cur);
    if(num === 1){return resArr;}

    for(var i = 2; i <= num; i++){
        var temp = cur;
        cur += prev;
        prev = temp;
        resArr.push(cur);
    }
    return resArr;
}

FibonacciNumbers();
