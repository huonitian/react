import React from 'react'
import { Card, Button, notification } from 'antd'

export default class Notice extends React.Component {

    openNotification = (type, direcion) => {
        if (direcion) {
            notification.config({
                placement: direcion
            })
        } 
        notification[type]({
            message: '发工资了',
            description: '欢迎学习慕课新推出的React高级课程'
        })
    } 

    render () {
        return (
            <div>
                <Card title="通知提醒框" className="card-warp">
                    <Button type="primary" onClick={ () => this.openNotification('success') }>Success</Button>
                    <Button type="primary" onClick={ () => this.openNotification('info') }>Info</Button>
                    <Button type="primary" onClick={ () => this.openNotification('warning') }>Warning</Button>
                    <Button type="primary" onClick={ () => this.openNotification('error') }>Error</Button>
                </Card>  
                <Card title="通知提醒框的方向" className="card-warp">
                    <Button type="primary" onClick={ () => this.openNotification('success', 'topLeft') }>Success</Button>
                    <Button type="primary" onClick={ () => this.openNotification('info', 'topRight') }>Info</Button>
                    <Button type="primary" onClick={ () => this.openNotification('warning', 'bottomLeft') }>Warning</Button>
                    <Button type="primary" onClick={ () => this.openNotification('error', 'bottomRight') }>Error</Button>
                </Card>  
            </div>
        )
    }

}