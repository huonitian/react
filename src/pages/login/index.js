import React from 'react'
import { Form, Card, Input, Button, Icon, Row, Col } from 'antd'
import axios from './../../axios'
import { connect } from 'react-redux'
import { userName } from './../../redux/action'
import './index.less'
const FormItem = Form.Item;

class Login extends React.Component {

    state={}

    handleLogin = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.requesList(userInfo)
            }
        })
    }

    requesList = (data) => {
        const { dispatch } = this.props;
        axios.ajax({
            url: '/login',
            data: {
                params: data
            }
        }).then(res => {
            if (res.status == 1) {
                dispatch(userName(data.username))
                this.props.history.push('/home')   
            }
        })
    }

    render () {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="login">
                <Row type="flex" justify="center" className="login_box">
                    <Col span={5}>
                        <Card>
                            <Form>
                                <FormItem>
                                    <h3 className="login_title">登录</h3>
                                </FormItem>
                                <FormItem>
                                    {
                                        getFieldDecorator('username',{
                                            initialValue: '',
                                            rules: [
                                                { 
                                                    required: true, 
                                                    message: '用户名不能为空' 
                                                }
                                            ]
                                        })(
                                            <Input prefix={<Icon type="user" />} placeholder="请输入用户名"/>
                                        )
                                    }   
                                </FormItem>   
                                <FormItem>
                                    {
                                        getFieldDecorator('password',{
                                            initialValue: '',
                                            rules: [
                                                { 
                                                    required: true, 
                                                    message: '密码不能为空' 
                                                }
                                            ]
                                        })(
                                            <Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码"/>
                                        )
                                    }   
                                </FormItem>
                                <Button block type="primary" onClick={ this.handleLogin }>登录</Button>   
                            </Form>
                        </Card>
                    </Col>
                </Row>    
            </div>    
        )
    }

}

export default connect()(Form.create()(Login))