import React from 'react'
import { Card } from 'antd'
import echartTheme from './../echartTheme'
// import echarts from 'echarts'
//按需加载
import echarts from 'echarts/lib/echarts'
//导入柱形图
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'

export default class Bar extends React.Component {

    componentWillMount () {
        echarts.registerTheme('Imooc', echartTheme)
    }

    getOption = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'订单量',
                    type:'bar',
                    barWidth: '60%',
                    data:[1000, 2000, 1500, 3340, 1390, 5330, 820]
                }
            ]
        }   
        return option
    }

    getOption2 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['OFO', '膜拜', '小蓝']
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'OFO',
                    type:'bar',
                    data:[1000, 5000, 1500, 3340, 7390, 5330, 12820]
                },
                {
                    name:'膜拜',
                    type:'bar',
                    data:[500, 1000, 3500, 3340, 7390, 15330, 3820]
                },
                {
                    name:'小蓝',
                    type:'bar',
                    data:[5000, 3000, 1500, 2340, 11390, 5330, 9820]
                }
            ]
        }   
        return option
    }

    render () {
        return (
            <div>
                <Card title="柱形图表之一">
                    <ReactEcharts
                        option={ this.getOption() }
                        theme="Imooc"
                        style={{ height: 500 }}
                    />
                </Card>
                <Card title="柱形图表之二" style={{ marginTop: 10 }}>
                    <ReactEcharts
                        option={ this.getOption2() }
                        theme="Imooc"
                        style={{ height: 500 }}
                    />
                </Card>
            </div>
        )
    }

}