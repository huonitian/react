import React from 'react'
import { Form, Card, Input, Button, Icon, Row, Col } from 'antd'
import './index.less'
const FormItem = Form.Item;

class Login extends React.Component {

    render () {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="login">
                <Row type="flex" justify="center" className="login_box">
                    <Col span={5}>
                        <Card>
                            <Form>
                                <FormItem>
                                    <Input prefix={<Icon type="user" />} placeholder="请输入用户名"/>    
                                </FormItem>   
                                <FormItem>
                                    <Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码"/>    
                                </FormItem>
                                <FormItem>
                                    <Button block type="primary">登录</Button>   
                                </FormItem>
                            </Form>
                        </Card>
                    </Col>
                </Row>    
            </div>    
        )
    }

}

export default Form.create()(Login)