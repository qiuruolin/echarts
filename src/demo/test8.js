let myChart = echarts.init(document.getElementById('test8'))

option = {
    color: ['#8EC9EB'],
    legend: {
        data:['高度(km)与气温(°C)变化关系']
    },
    tooltip: {
        trigger: 'axis',
        formatter: "Temperature : <br/>{b}km : {c}°C"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {onZero: false},
        axisLabel: {
            formatter: '{value} km'
        },
        boundaryGap: true,
        data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
    },
    graphic: [
        {
            type: 'image',
            id: 'logo',
            right: 20,
            top: 20,
            z: -10,
            bounding: 'raw',
            origin: [25, 25],
            style: {
                image: 'http://echarts.baidu.com/images/favicon.png',
                width: 50,
                height: 50,
                opacity: 0.4
            }
        },
        {
            type: 'group',
            rotation: Math.PI / 4,
            bounding: 'raw',
            right: 80,
            bottom: 80,
            z: 100,
            children: [
                {
                    type: 'rect',
                    left: 'center',
                    top: 'center',
                    z: 100,
                    shape: {
                        width: 400,
                        height: 50
                    },
                    style: {
                        fill: 'rgba(0,0,0,0.3)'
                    }
                },
                {
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    z: 100,
                    style: {
                        fill: '#fff',
                        text: 'ECHARTS BAR CHART',
                        font: 'bold 18px Microsoft YaHei'
                    }
                }
            ]
        },
        {
            type: 'group',
            left: '16%',
            top: 'center',
            children: [
                {
                    type: 'rect',
                    z: 100,
                    left: 'center',
                    top: 'middle',
                    shape: {
                        width: 160,
                        height: 70
                    },
                    style: {
                        fill: '#fff',
                        stroke: '#555',
                        lineWidth: 2,
                        shadowBlur: 8,
                        shadowOffsetX: 3,
                        shadowOffsetY: 3,
                        shadowColor: 'rgba(0,0,0,0.3)'
                    }
                },
                {
                    type: 'text',
                    z: 100,
                    left: 'center',
                    top: 'middle',
                    style: {
                        fill: '#333',
                        text: [
                            '横轴表示温度，单位是°C',
                            '纵轴表示高度，单位是km',
                            '右上角有一个图片做的水印',
                            '这个文本块可以放在图中各',
                            '种位置'
                        ].join('\n'),
                        font: '10px Microsoft YaHei'
                    }
                }
            ]
        }
    ],
    series: [
        {
            name: '高度(km)与气温(°C)变化关系',
            type: 'bar',
            smooth: true,
            barCategoryGap: 25,
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(0,0,0,0.4)',
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
            data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
        }
    ]
};

var rotation = 0;
setInterval(function () {
    myChart.setOption({
        graphic: {
            id: 'logo',
            rotation: (rotation += Math.PI / 360) % (Math.PI * 2)
        }
    });
}, 30);

module.export = function() {
  myChart.setOption(option)
}()