function SortRows(idCoulumn) {
    var INDEX_HEAD_OF_TABLE = 0;
    table = document.getElementById('tableOfPeople');
    var sortingTh = document.getElementById(idCoulumn);
    var headRow = table.children[INDEX_HEAD_OF_TABLE].children[INDEX_HEAD_OF_TABLE].children;
    var indexOfSortingColumn = NaN;
    for (var i = 0; i < headRow.length; i++) {
        if (headRow[i] === sortingTh) {
            indexOfSortingColumn = i;
        }
    }
    var rows = table.children[INDEX_HEAD_OF_TABLE].children;
    

    alert(indexOfSortingColumn);
}

SortRows("personName");
