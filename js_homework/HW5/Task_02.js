function JoinArrays(){
    var A = [1,2];
    var B = [2,3];
    var C = [];
    C = A.concat(B);
    C = MakeUnique(C);
    alert(C);
}

function MakeUnique(arr){
    var resArr = [];
    var tempArr = arr.slice();
    for(var i = 0; i<tempArr.length; i++){
        if(!tempArr[i]){
            continue;
            //alert("continue "+i);
        }
        resArr.push(tempArr[i]);
        var temp = tempArr[i];
        while(tempArr.indexOf(temp) > -1){
            //alert(arr.indexOf(temp));
            delete tempArr[tempArr.indexOf(temp)];
            //alert(arr.indexOf(temp));
        }
    }
    return resArr;
}

JoinArrays();
