import React from 'react'
import { Card, Table, Button, Modal } from 'antd'
import axios from './../../axios'

export default class BasicTable extends React.Component {
    
    state = {
        dataSource2: []
    }

    componentDidMount () {
        this.request()
    }

    //动态渲染mock数据
    request = () => {
        axios.ajax({
            url: '/table/list1',
            data: {
                params: {
                    page: 1
                }
            }
        }).then(res => {
            if (res.status == '1') {
                this.setState({
                    dataSource2: res.data.list
                })
            }
        })
    }

    handleDelete = (item) => {
        Modal.info({
            title: '提示',
            content: `行id是：${item.id}`
        })    
    }

    render () {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'username',
                width: 80
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render (sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 80,
                render (state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子一枚',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                width: 80,
                render (state) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '爬山',
                        '5': '跑步'
                    }
                    return config[state]
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '早起时间',
                dataIndex: 'time',
                width: 80
            }
        ]

        const columns1 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'username',
                width: 80
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render (sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 80,
                render (state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子一枚',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                width: 80,
                render (state) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '爬山',
                        '5': '跑步'
                    }
                    return config[state]
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '早起时间',
                dataIndex: 'time',
                width: 80
            },
            {
                title: '操作',
                width: 80,
                render: (text, item) => {
                    return <Button type="primary" onClick={ () => this.handleDelete(item) }>删除</Button>
                }
            }
        ]
        return (
            <div>
                <Card title="头部固定">
                    <Table
                        bordered 
                        dataSource={ this.state.dataSource2 } 
                        columns={ columns }
                        rowKey='id'
                        pagination={false}
                        scroll={{ y: 240 }}
                    >
                    </Table>   
                </Card>
                <Card title="操作按钮" style={{ margin: '10px 0' }}>
                    <Table
                        bordered 
                        dataSource={ this.state.dataSource2 } 
                        columns={ columns1 }
                        rowKey='id'
                        pagination={false}
                    >
                    </Table>   
                </Card>
            </div>
        )
    }
}