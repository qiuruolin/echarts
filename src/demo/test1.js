// initialize echarts instance with prepared DOM
let myChart = echarts.init(document.getElementById('test1'));
// draw chart

// 折线图
let option = {
    xAxis: {
        type: 'category',
        boundaryGap: false, // 面积折线图
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}, // 面积折线图
        smooth: true, // 线条平滑设置
    }]
};

module.export = function () {
    myChart.setOption(option);
}()