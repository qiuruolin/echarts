//实时数据+时间坐标轴
let myChart = echarts.init(document.getElementById('test6'))
function randomData() {
  now = new Date(+now + oneDay)
  value = value + Math.random() * 21 - 10
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
      Math.round(value)
    ]
  }
}

let data = []
let now = +new Date(1997, 9, 3)
let oneDay = 24 * 3600 * 1000
let value = Math.random() * 1000
for(let i = 0; i < 1000; i++){
  data.push(randomData())
}

let option = {
  title: {
    text: "动态数据+时间坐标轴"
  },
  tooltip: {
    tigger: 'axis',
    formatter: function(params) {
      params = params[0]
      let date = new Date(params.name)
      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1]
    },
    axisPointer: {
      animation: false
    }
  },
  xAxis: {
    type: 'time',
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
    splitLine: {
      show: false
    }
  },
  series: [
    {
      name: '模拟数据',
      type: 'line',
      showSymbol: false, //是否显示数据点
      hoverAnimation: false,
      data: data
    }
  ]
}
setInterval(function() {
  for(let i = 0; i < 5; i++){
    data.shift()
    data.push(randomData())
    myChart.setOption({
      series: [
        {
          data: data
        }
      ]
    })
  }
}, 1000)

module.export = function() {
  myChart.setOption(option)
}()