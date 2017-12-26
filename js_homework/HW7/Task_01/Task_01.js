google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var formData = [['x', 'y']];
    for (var i = -5; i < 1; i += 0.01) {
        formData.push([i, i * i - 4 * i]);
    }
    for (var i = 1; i < 5; i += 0.01) {
        formData.push([i, 5 / i]);
    }
    var data = google.visualization.arrayToDataTable(formData);

    var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: {position: 'bottom'}
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}
 