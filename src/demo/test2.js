var myChart = echarts.init(document.getElementById('test2'));
let option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip: { //鼠标hover时显示的tip
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            },
            crossStyle: { //横线的样式
                color: '#333'
            }
        }
    },
    legend: {
        data: ['邮件营销', '直接访问', '搜索引擎']
    },
    toolbox: { // 工具盒
        feature: {
            saveAsImage: {}, // 保存为图片
            // restore: {}, // 还原
            // dataView: {}, //查看数据
            // dataZoom: {}, //区域缩放
            // magicType: { // 图形类型（折线图、柱状图、堆叠、平铺）
            //     type: ['line', 'bar', 'stack', 'tiled']
            // },
            // brush: {} //选择
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'bottom'
                }
            },
            areaStyle: {
                normal: {}
            },
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: { // 这线上数字的样式
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {
                normal: {}
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

module.export = function () {
    myChart.setOption(option)
}()