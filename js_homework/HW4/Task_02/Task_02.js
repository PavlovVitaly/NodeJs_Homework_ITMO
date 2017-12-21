function CreateXZeroBoard(board) {
    var styleOfTable = '<style type="text/css">.MultTable, .MultTable td, .MultTable tr{border: 1px solid black;} .MultTable td{text-align: center; width: 50px; height: 50px}</style>';
    var table = '<table class = "MultTable">' + ' ' + '<tr><th></th>';
    for (i = 0; i < 3; i++) {
        table += '<tr>';
        for (var j = 0; j < 3; j++) {
            table += '<td>' + GetCellContent(board[i*3+j]) + '</td>';
        }
        table += '<tr>';
    }
    table += '</table>';
    var result = styleOfTable + ' ' + table;
    document.write(result);
}

function GetCellContent(cell){
    var cellContent = '';
    switch(cell){
        case 1:
            cellContent = 'X';
            break;
        case 0:
            cellContent = 'O';
            break;
    }
    return cellContent;
}
