import React from 'react'
import { Card, Table} from 'antd'
import axios from './../../axios'

export default class BasicTable extends React.Component {
    
    state = {
        dataSource2: []
    }

    componentDidMount () {
        const dataSource = [
            {
                id: '0',
                username: 'jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2010-09-02',
                address: '深圳',
                time: '09:00'
            },
            {
                id: '1',
                username: 'tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2010-09-02',
                address: '深圳',
                time: '09:00'
            },
            {
                id: '2',
                username: 'tim',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2010-09-02',
                address: '深圳',
                time: '09:00'
            }
        ]
        this.setState({
            dataSource    
        })
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

    onRowClick = (record,index) => {
        // let selectKey = [index]
        this.setState({
            selectedRowKeysRadio: [record.id],
            selectItem: record
        })
    }

    render () {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render (sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
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
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ]
        const rowSelection = {
            type: 'radio',
            selectedRowKeys: this.state.selectedRowKeysRadio
        }
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys,
                    selectedRows   
                })
            }    
        }
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered 
                        dataSource={ this.state.dataSource } 
                        columns={ columns }
                        rowKey='id'
                        pagination={false}
                    >
                    </Table>   
                </Card>  
                <Card title="动态渲染数据表格-mock" style={{ margin: '10px 0' }}>
                    <Table
                        bordered 
                        dataSource={ this.state.dataSource2 } 
                        columns={ columns }
                        rowKey='id'
                        pagination={false}
                    >
                    </Table>   
                </Card> 
                <Card title="mock-单选" style={{ margin: '10px 0' }}>
                    <Table
                        bordered 
                        rowSelection= { rowSelection }
                        onRow={(record,index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record,index)
                                }
                            }
                        }}
                        dataSource={ this.state.dataSource2 } 
                        columns={ columns }
                        rowKey='id'
                        pagination={false}
                    >
                    </Table>   
                </Card>
                <Card title="mock-复选" style={{ margin: '10px 0' }}>
                    <Table
                        bordered 
                        rowSelection= { rowCheckSelection }
                        dataSource={ this.state.dataSource2 } 
                        columns={ columns }
                        rowKey='id'
                        pagination={false}
                    >
                    </Table>   
                </Card>
            </div>
        )
    }
}