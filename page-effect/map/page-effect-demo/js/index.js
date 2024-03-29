(function() {
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [{
            type: "category",
            data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                color: "rgba(255,255,255,.6) ",
                fontSize: "12"
            },
            axisLine: {
                show: false
            }
        }],
        yAxis: [{
            type: "value",
            axisLabel: {
                color: "rgba(255,255,255,.6) ",
                fontSize: 12
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 2
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
            name: "直接访问",
            type: "bar",
            barWidth: "35%",
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
                barBorderRadius: 5
            }
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}
)();
(function() {
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    var option = {
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            type: "category",
            inverse: true,
            data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#fff"
            }
        }, {
            data: [702, 350, 610, 793, 664],
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#fff"
            }
        }],
        series: [{
            name: "条",
            type: "bar",
            data: [70, 34, 60, 78, 69],
            yAxisIndex: 0,
            itemStyle: {
                barBorderRadius: 20,
                color: function(params) {
                    return myColor[params.dataIndex];
                }
            },
            barCategoryGap: 50,
            barWidth: 10,
            label: {
                show: true,
                position: "inside",
                formatter: "{c}%"
            }
        }, {
            name: "框",
            type: "bar",
            barCategoryGap: 50,
            barWidth: 15,
            yAxisIndex: 1,
            data: [100, 100, 100, 100, 100],
            itemStyle: {
                color: "none",
                borderColor: "#00c1de",
                borderWidth: 3,
                barBorderRadius: 15
            }
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}
)();
(function() {
    var yearData = [{
        year: "2020",
        data: [[24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120], [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]]
    }, {
        year: "2021",
        data: [[123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38], [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]]
    }];
    var myChart = echarts.init(document.querySelector(".line .chart"));
    var option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['新增游客 ', ' 新增粉丝 '],
            textStyle: {
                color: '#4c9bfd'
            },
            right: '10%'
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,
            borderColor: '#012f4a',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                show: false,
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        series: [{
            name: '新增游客',
            type: 'line',
            smooth: true,
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
        }, {
            name: '新增粉丝',
            type: 'line',
            smooth: true,
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    })
    $(".line h2").on("click", "a", function() {
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        myChart.setOption(option);
    });
}
)();
(function() {
    var myChart = echarts.init(document.querySelector(".line2 .chart"));
    var mycolor = ['#562345', '#332211', ];
    var option = {
        legend: {
            top: "10",
            textStyle: {
                color: "rgba(255,255,255,0.5)",
                fontSize: "12"
            }
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['邮件营销', '联盟广告']
        },
        toolbox: {},
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.2)"
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
            name: '邮件营销',
            type: 'line',
            smooth: true,
            lineStyle: {
                color: "#0184d5",
                width: 2
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0,0,0,1,[{
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.4)"
                }, {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.1)"
                }],false),
                shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
                color: "#0184d5",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        }, {
            name: '转发量',
            type: 'line',
            lineStyle: {
                normal: {
                    color: "#00d887",
                    width: 2
                }
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0,0,0,1,[{
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.4)"
                }, {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.1)"
                }],false),
                shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            symbolSize: 5,
            itemStyle: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
            },
            showSymbol: false,
            data: [220, 182, 191, 234, 290, 330, 310]
        }]
    };
    myChart.setOption(option);
}
)();
(function() {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab", ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            itemWidth: 10,
            itemHeight: 10,
            bottom: "0%",
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            center: ["50%", "50%"],
            radius: ["40%", "60%"],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 335,
                name: '直接访问'
            }, {
                value: 310,
                name: '邮件营销'
            }, {
                value: 234,
                name: '联盟广告'
            }, {
                value: 135,
                name: '视频广告'
            }, {
                value: 1548,
                name: '搜索引擎'
            }]
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}
)();
(function() {
    var myChart = echarts.init(document.querySelector(".pie2 .chart"));
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        title: {
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        },
        series: [{
            name: "地区分布",
            type: 'pie',
            radius: ['10%', '70%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            label: {
                show: true
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 10
                }
            },
            labelLine: {
                length: 6,
                length2: 8
            },
            data: [{
                value: 20,
                name: '云南'
            }, {
                value: 26,
                name: '北京'
            }, {
                value: 24,
                name: '山东'
            }, {
                value: 25,
                name: '河北'
            }, {
                value: 20,
                name: '江苏'
            }, {
                value: 25,
                name: '浙江'
            }, {
                value: 30,
                name: '四川'
            }, {
                value: 42,
                name: '湖北'
            }]
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}
)();
