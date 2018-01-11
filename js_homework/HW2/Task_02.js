function DetectRightTriangle() {    var X = prompt("������� ���������� ������� X (����� ������)");    var Y = prompt("������� ���������� ������� Y (����� ������)");    var Z = prompt("������� ���������� ������� Z (����� ������)");    X = ConvertStringToCoord(X);    Y = ConvertStringToCoord(Y);    Z = ConvertStringToCoord(Z);    if (X.length != 2 || Y.length != 2 || Z.length != 2) {        alert("���������� ����");        return;    }    var sqrtOfSides = GetSqrtOfTriangleSides(X, Y, Z);    if (IsRightTriangle(sqrtOfSides)) {        alert("����������� �������������");    } else {        alert("����������� ���������������");    }}function ConvertStringToCoord(str) {    str = str.trim();    var coord = str.split(' ');    for (var i = 0; i < coord.length; i++) {        coord[i] = Number(coord[i]);    }    return coord;}function GetSqrtOfTriangleSides(X, Y, Z) {    var sqrtOfSides = [];    sqrtOfSides[0] = Math.pow(Y[0] - X[0], 2) + Math.pow(Y[1] - X[1], 2);    sqrtOfSides[1] = Math.pow(Z[0] - Y[0], 2) + Math.pow(Z[1] - Y[1], 2);    sqrtOfSides[2] = Math.pow(X[0] - Z[0], 2) + Math.pow(X[1] - Z[1], 2);    return sqrtOfSides;}function IsRightTriangle(sqrtOfSides) {    if ((sqrtOfSides[0] === sqrtOfSides[1] + sqrtOfSides[2]) ||       (sqrtOfSides[1] === sqrtOfSides[0] + sqrtOfSides[2]) ||       (sqrtOfSides[2] === sqrtOfSides[1] + sqrtOfSides[0])) {        return true;    }    return false;}DetectRightTriangle();