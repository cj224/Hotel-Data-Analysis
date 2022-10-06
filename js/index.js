$(function() {
	echart_1();
	echart_2();
	echart_3();

	function echart_1() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('chart_1'));
		var xAxisData = [
			'九寨天堂洲际大饭店',
			'阿坝九寨沟九源酒店',
			'九寨沟九寨度假村',
			'九寨沟天源豪生度假酒店',
			'若尔盖黄河第一湾大酒店',
			'九寨沟三喜宾馆',
			'九寨沟喜来登国际大酒店',
			'九寨沟西姆酒店',
			'九寨沟千鹤国际大酒店',
			'九寨沟鑫涛阁藏家客栈二号楼',
		];
		var serieData = [];
		var metaDate = [
			[3328, 1931, 1593, 1481, 1285, 1280, 1236, 1168, 1143, 1079],
		]
		for (var v = 0; v < 1; v++) {
			var serie = {
				type: 'bar',
				name: '评论数',
				data: metaDate[v],
				barWidth: 25,
				itemStyle: {
					normal: {
						label: {
							show: true, //开启显示
							position: 'top', //在上方显示
							textStyle: { //数值样式
								color: 'white',
								fontSize: 12
							}
						}
					}
				},
			};
			serieData.push(serie);
		}
		var option = {
			// backgroundColor: '#0f375f',
			toolbox: {
				right: '10%',
				itemGap: 20,
				iconStyle: {
					color: '#fff',
					borderColor: '#fff',
					borderWidth: 1,
				},
				feature: {
					saveAsImage: {},
					magicType: {
						// show: true,
						type: ['line', 'bar']
					}
				}
			},
			color: ["#ff9a02"],
			grid: {
				height: 220,
				left: '5%',
				top: "8%",
				bottom: "10%",
				right: "8%",
				containLabel: true
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				},
			},
			xAxis: [{
				type: 'category',
				axisLine: {
					lineStyle: {
						color: '#6173A3'
					}
				},
				axisLabel: {
					rotate: 40,
					textStyle: {
						color: '#ffd502',
						fontSize: 12,
					}
				},
				axisTick: {
					show: true
				},
				data: xAxisData,
			}, ],
			yAxis: [{
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#9ea7c4',
						fontSize: 12
					}
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: '#6173A3'
					}
				},
			}, ],
			series: serieData
		};
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	function echart_2() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('chart_2'));
		myChart.setOption({
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				left: '1%',
				right: '55%',
				top: '5%',
				bottom: '1%',
				containLabel: true,
			},
			xAxis: {
				type: 'value',
				position: 'top',
				splitLine: {
					show: false
				},
				boundaryGap: [0, 0.01],
				axisTick: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#9ea7c4',
						fontSize: 12
					}
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: '#6173A3'
					}
				},
			},
			yAxis: {
				type: 'category',
				data: ['安徽', '甘肃', '广西', '贵州', '海南', '河南', '吉林', '辽宁', '内蒙古', '陕西', '四川', '西藏', '新疆'],
				axisTick: {
					show: true
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#9ea7c4',
						fontSize: 12
					}
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: '#6173A3'
					}
				},
			},
			series: [{
				name: '',
				itemStyle: {
					normal: {
						color: function(params) {
							// build a color map as your need.
							var colorList = [
								'#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
								'#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
								'#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
							];
							return colorList[params.dataIndex]
						},
						shadowBlur: 20,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				},
				type: 'bar',
				data: [1405, 424, 945, 899, 66, 839, 1635, 580, 1198, 780, 3279, 111, 873]
			}, {
				type: 'pie',
				radius: [20, '68%'],
				center: ['70%', '52%'],
				color: ['#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
					'#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
					'#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
				],
				data: [{
					value: 1405,
					name: '安徽'
				}, {
					value: 424,
					name: '甘肃'
				}, {
					value: 945,
					name: '广西'
				}, {
					value: 899,
					name: '贵州'
				}, {
					value: 66,
					name: '海南'
				}, {
					value: 839,
					name: '河南'
				}, {
					value: 1635,
					name: '吉林'
				}, {
					value: 580,
					name: '辽宁'
				}, {
					value: 1198,
					name: '内蒙古'
				}, {
					value: 780,
					name: '陕西'
				}, {
					value: 3279,
					name: '四川'
				}, {
					value: 111,
					name: '西藏'
				}, {
					value: 873,
					name: '新疆'
				}],
				label: {
					normal: {
						textStyle: {
							fontSize: 12
						},
						formatter: function(param) {
							return param.name + ':\n' + Math.round(param.percent) + '%';
						}
					}
				},
				labelLine: {
					normal: {
						show: true,
						lineStyle: {
							width: 2,

						}
					}
				},
				itemStyle: {
					normal: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.4)'
					}
				},
				animationType: 'scale',
				animationEasing: 'elasticOut',
				animationDelay: function(idx) {
					return Math.random() * 200;
				}
			}]
		});
	}

	function echart_3() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('chart_3'));

		var option = {
			legend: {
				textStyle: { //图例文字的样式
					color: '#fff',
					fontSize: 12
				},
			},
			tooltip: {},
			color: ['#ff5500', '#ffaa00', '#FCCE10', '#E87C25', '#27727B'],
			dataset: {
				source: [
					['product', '房间数', '评分', '酒店总订单', '酒店总间夜'],
					['九寨天堂洲际大饭店', 1020, 4.56, 328, 669],
					['九寨天堂甲蕃古城假日酒店', 606, 4.50, 27, 74],
					['阿坝香谷·弗舍酒店', 980, 4.29, 33, 51],
					['茂县兴隆宾馆', 314, 4.59, 115, 187]
				]
			},
			series: [{
				type: 'pie',
				radius: '25%',
				center: ['25%', '30%'],
				encode: {
					itemName: 'product',
					font: {
						color: '#fff',
					},
					value: '房间数'
				},
			}, {
				type: 'pie',
				radius: '25%',
				center: ['75%', '30%'],
				encode: {
					itemName: 'product',
					value: '评分'
				}
			}, {
				type: 'pie',
				radius: '25%',
				center: ['25%', '75%'],
				encode: {
					itemName: 'product',
					value: '酒店总订单'
				}
			}, {
				type: 'pie',
				radius: '25%',
				center: ['75%', '75%'],
				encode: {
					itemName: 'product',
					value: '酒店总间夜'
				}
			}]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}
});
