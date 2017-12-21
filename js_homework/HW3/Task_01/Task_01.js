function CreateMultTable() {
    var styleOfTable = '<style type="text/css">.MultTable, .MultTable th, .MultTable td, .MultTable tr{border: 1px solid black;} .MultTable th, .MultTable td{text-align: center; width: 50px; height: 50px}</style>';
    var table = '<table class = "MultTable">' + ' ' + '<tr><th></th>';
    for (var i = 1; i < 10; i++) {
        table += '<th>' + i + '</th>';
    }
    table += '<tr>';
    for (i = 1; i < 10; i++) {
        table += '<tr><td><b>' + i + '</b></td>';
        for (var j = 1; j < 10; j++) {
            table += '<td>' + i * j + '</td>';
        }
        table += '<tr>';
    }
    table += '</table>';
    var result = styleOfTable + ' ' + table;
    document.write(result);
}