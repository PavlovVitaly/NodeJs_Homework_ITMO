function rebase() {
    var x = Number(prompt("������� x"));
    var y = Number(prompt("������� y"));
    if (x > y) {
        var temp = x;
        x = y;
        y = temp;

        /*x = x + y;
        y= y- x;
        y= -y;
        x= x- y;

        x = x ^ y;
        y = x ^ y;
        x = x ^ y;*/
    }
    alert("x = " + x + "\ny = " + y);
}

rebase();
