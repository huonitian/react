import React from 'react'
import { Card, Spin, Icon, Alert } from 'antd'

export default class Loadings extends React.Component {

    render () {
        const icon = <Icon type="loading" style={{ fontSize: 24 }}></Icon>
        return (
            <div>
                <Card title="Spin用法" className="card-warp">
                    <Spin size="small"></Spin>
                    <Spin style={{ margin: '0 10px' }}></Spin>
                    <Spin size="large"></Spin>
                    <Spin indicator={ icon } style={{ marginLeft: 10 }}></Spin>
                </Card>
                <Card title="内容遮罩">
                    <Alert
                        message="React"
                        description="欢迎学习慕课新推出的React高级课程"
                        type="info"
                    />
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎学习慕课新推出的React高级课程"
                            type="warning"
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎学习慕课新推出的React高级课程"
                            type="warning"
                        />
                    </Spin>
                    <Spin indicator={ icon }>
                        <Alert
                            message="React"
                            description="欢迎学习慕课新推出的React高级课程"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }

}