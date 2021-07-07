google.charts.load("current", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['X', 'Y'],
        [1, 3],
        [2, 2.5],
        [3, 3],
        [4, 4],
        [5, 4],
        [6, 3],
        [7, 2.5],
        [8, 3]
    ]);

    var options = {
        legend: 'none',
        hAxis: {},
        vAxis:{},
        curveType: 'function',
        pointSize: 10,
        trendlines:{
            
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}



// google.charts.load("current", {
//     packages: ["corechart"]
// });
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {
//     var data = google.visualization.arrayToDataTable([
//         ['X', 'Y'],
//         [1, 3],
//         [2, 2.5],
//         [3, 3],
//         [4, 4],
//         [5, 4],
//         [6, 3],
//         [7, 2.5],
//         [8, 3]
//     ]);

//     var options = {
//         legend: 'none',
//         hAxis: {
//             minValue: 0,
//             maxValue: 9
//         },
//         curveType: 'function',
//         pointSize: 10,
//     };

//     var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
//     chart.draw(data, options);
// }