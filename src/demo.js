var echarts = require('echarts');
import './css/style'

document.getElementById('main').className = "test"

// initialize echarts instance with prepared DOM
var myChart = echarts.init(document.getElementById('main'));
// draw chart
var option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};

myChart.setOption(option);