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

export default class Line extends React.Component {

    componentWillMount () {
        echarts.registerTheme('Imooc', echartTheme)
    }

    getOption = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip : {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data:['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series : [
                {
                    name:'订单量',
                    type:'line',
                    data:[1000, 5000, 1500, 3340, 4390, 5330, 2820]
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
                trigger: 'axis'
            },
            legend: {
                data: ['OFO订单量','膜拜订单量']
            },
            xAxis: {
                type: 'category',
                data:['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series : [
                {
                    name:'OFO订单量',
                    type:'line',
                    data:[800, 1500, 3500, 3340, 4390, 7330, 9820]
                },
                {
                    name:'膜拜订单量',
                    type:'line',
                    data:[1000, 2000, 3500, 4340, 6390, 8330, 12820]
                }
            ]
        }   
        return option
    }

    getOption3 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip : {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data:['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series : [
                {
                    name:'订单量',
                    type:'line',
                    data:[1000, 5000, 1500, 3340, 4390, 5330, 2820],
                    areaStyle: {}
                }
            ]
        }   
        return option
    }

    render () {
        return (
            <div>
                <Card title="折线图表之一">
                    <ReactEcharts
                        option={ this.getOption() }
                        theme="Imooc"
                        style={{ height: 500 }}
                    />
                </Card>
                <Card title="折线图表之二" style={{ marginTop: 10 }}>
                    <ReactEcharts
                        option={ this.getOption2() }
                        theme="Imooc"
                        style={{ height: 500 }}
                    />
                </Card>
                <Card title="折线图表之三" style={{ marginTop: 10 }}>
                    <ReactEcharts
                        option={ this.getOption3() }
                        theme="Imooc"
                        style={{ height: 500 }}
                    />
                </Card>
            </div>
        )
    }

}