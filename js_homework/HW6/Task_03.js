function TestClosure(){
    var arr = [];
    var func = GetClosure();
    for(var i = 0; i<99; i++){
        arr.push(func());
    }
    alert(arr);
    alert(func());
}

function GetClosure(){
    var oldNum = [];
    return function(){
        if(oldNum.length >= 99){return NaN;}
        var res = 0;
        while(true){
            res = Math.round((Math.random() * 100));
            if(oldNum.indexOf(res) < 0){
                oldNum.push(res);
                return res;
            }
        }
    };
}

TestClosure();
