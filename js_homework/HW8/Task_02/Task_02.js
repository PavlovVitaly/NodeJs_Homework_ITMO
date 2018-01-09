product = {
    name: "trash",
    vendorCode: "007",
    description: "bla-bla-bla",
    InsertTableInElement: function (id) {
        var element = document.getElementById(id);
        element.innerHTML = this.MakeTable();
    },
    MakeTable: function () {
        var style = '<style type="text/css"> th, td, tr {border: 1px solid black;}</style>';
        var table = "<table> <tr> <th>Name</th> <th>Vendor Code</th> <th>Description</th> </tr>";
        table += "<tr> <td>" + this.name + "</td> <td>" + this.vendorCode + "</td> <td>" + this.description + "</td> </tr>";
        table += "</table>";
        return style + table;
    }
};