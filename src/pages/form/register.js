import React from 'react'
import { Card, Form, Button, Input, Icon, Radio, InputNumber, Select, Switch, DatePicker, Upload, Checkbox, message } from 'antd'
import moment from 'moment'
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class FormRegister extends React.Component {

    state={}

    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg: imageUrl,
                loading: false,
            }));
        }
    }

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`${userInfo.userName}恭喜您，密码为${userInfo.userPwd}`)
            }
        })
    }

    render () {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 4 }
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 6 }
                }
            }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: { span: 6, offset: 4 }
            }
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form>
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName',{
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
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd',{
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
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('gender',{
                                    initialValue: '1'
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>    
                                )   
                            }   
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age',{
                                    initialValue: '18'
                                })(
                                    <InputNumber/>  
                                )   
                            }   
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state',{
                                    initialValue: '2'
                                })(
                                    <Select>
                                        <Option value="1">咸鱼一条</Option>
                                        <Option value="2">风华浪子</Option>
                                        <Option value="3">北大才子一枚</Option>
                                        <Option value="4">百度FE</Option>
                                        <Option value="5">创业者</Option>
                                    </Select>  
                                )   
                            }   
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('interest',{
                                    initialValue: ['1','2']
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">游泳</Option>
                                        <Option value="2">打篮球</Option>
                                        <Option value="3">踢足球</Option>
                                        <Option value="4">爬山</Option>
                                        <Option value="5">跑步</Option>
                                    </Select>  
                                )   
                            }   
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried',{
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Switch/>
                                )   
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday',{
                                    initialValue: moment('2018-08-08 12:00:00')
                                })(
                                    <DatePicker
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />
                                )   
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address',{
                                    initialValue: ''
                                })(
                                    <TextArea
                                        autosize={
                                            {minRows: 4, maxRows: 6}
                                        }
                                    />   
                                )   
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        listType="picture-card"
                                        showUploadList={false}
                                        onChange={ this.handleChange }
                                    >
                                        { this.state.userImg?<img src={ this.state.userImg } />:<Icon type="plus" /> }
                                    </Upload>   
                                )   
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('remember',{
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Checkbox>我已阅读过<a href="#">协议</a> </Checkbox> 
                                )   
                            }  
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={ this.handleSubmit }>注册</Button>   
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(FormRegister)