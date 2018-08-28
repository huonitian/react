import React from 'react'
import { Card, Table} from 'antd'

export default class BasicTable extends React.Component {
    
    state = {}

    componentDidMount () {
        const dataSource = [
            {
                id: '0',
                userName: 'jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2010-09-02',
                address: '深圳',
                time: '09:00'
            },
            {
                id: '1',
                userName: 'tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2010-09-02',
                address: '深圳',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'tim',
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
    }

    render () {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex'
            },
            {
                title: '状态',
                dataIndex: 'state'
            },
            {
                title: '爱好',
                dataIndex: 'interest'
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
            </div>
        )
    }
}