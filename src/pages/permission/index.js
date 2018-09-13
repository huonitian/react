import React from 'react'
import { Card, Button, Table, Modal, Form, Input, Select, Tree } from 'antd'
import Utils from './../../utils/utils'
import axios from './../../axios'
import data from './../../config/menuConfig'
const FormItem = Form.Item;
const Option = Select.Option;
const TreeNode = Tree.TreeNode;

export default class PermissionUser extends React.Component {

    state={
        dataSource: [],
        isRoleVisible: false,
        isPermVisible: false
    }

    componentWillMount () {
        this.requestList()
    }

    // 权限列表数据
    requestList = () => {
        axios.ajax({
            url: '/role/list',
            data: {
                params: {
                    page: 1
                }
            }
        }).then(res => {
            if (res.status == '1') {
                this.setState({
                    dataSource: res.list
                })
            }
        })
    }

    onRowClick = (record,index) => {
        this.setState({
            selectedRowKeysRadio: [record.id],
            selectItem: record
        })
    }

    // 打开创建角色弹框
    handleRole = () => {
        this.setState({
            isRoleVisible: true    
        })
    }

    // 角色提交
    handleRoleSubmit = () => {
        let data = this.roleForm.props.form.getFieldsValue();
        axios.ajax({
            url: '/role/create',
            data: {
                params: data
            }
        }).then( res => {
            if (res.status == 1) {
                this.setState({
                    isRoleVisible: false    
                })
                this.roleForm.props.form.resetFields()
                this.requestList()   
            }
        })
    }

    // 打开权限设置弹框
    handlePermission = () => {
        let item = this.state.selectItem
        if (!item) {
            Modal.info({
                title: '提示',
                content: '请选择一个角色'
            })
            return
        }
        this.setState({
            isPermVisible: true,
            detailInfo: item
        })
    }

    handlePermEditSubmit = () => {

    }

    render () {
        const columns = [
            {
                title: '角色id',
                dataIndex: 'id'
            },
            {
                title: '角色名称',
                dataIndex: 'role_name'
            },
            {
                title: '创建时间',
                dataIndex: 'create_time'
            },
            {
                title: '使用状态',
                dataIndex: 'status',
                render: (status) =>  status == 1 ? '启用' : '禁用'
            },
            {
                title: '授权时间',
                dataIndex: 'authorize_time',
                render: Utils.formateDate
            },
            {
                title: '授权人',
                dataIndex: 'authorize_user_name'
            }
        ]
        const rowSelection = {
            type: 'radio',
            selectedRowKeys: this.state.selectedRowKeysRadio
        }
        return (
            <div>
                <Card>
                    <Button type="primary" onClick={ this.handleRole }>创建角色</Button>
                    <Button type="primary" style={{ margin: '0 10px' }} onClick={ this.handlePermission }>设置权限</Button>   
                    <Button type="primary">用户授权</Button>       
                </Card>
                <Card>
                    <Table
                        bordered 
                        dataSource={ this.state.dataSource } 
                        columns={ columns }
                        rowSelection= { rowSelection }
                        onRow={(record,index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record,index)
                                }
                            }
                        }}
                        rowKey='id'
                        pagination={false}
                    >
                    </Table>    
                </Card>
                <Modal
                    title="创建角色"
                    visible={ this.state.isRoleVisible }
                    onOk={ this.handleRoleSubmit }
                    onCancel={ () => {
                        this.roleForm.props.form.resetFields();
                        this.setState({
                            isRoleVisible: false   
                        })
                    }}
                >
                    <RoleForm wrappedComponentRef={ (inst) => this.roleForm = inst }></RoleForm>
                </Modal>
                <Modal
                    title="设置权限"
                    visible={ this.state.isPermVisible }
                    width={ 600 }
                    onOk={ this.handlePermEditSubmit }
                    onCancel={ () => {
                        this.setState({
                            isPermVisible: false   
                        })
                    }}
                >
                    <PermEditForm 
                        detailInfo={ this.state.detailInfo }
                    />   
                </Modal>    
            </div>
        )
    }

}

class RoleForm extends React.Component {

    render () {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 }
            }
        }
        return (
            <Form>
                <FormItem label="角色名称" {...formItemLayout}>
                    {
                        getFieldDecorator('role_ame')(
                            <Input placeholder="请输入角色名称"/>
                        )   
                    }
                </FormItem>
                <FormItem label="状态" {...formItemLayout}>
                    {
                        getFieldDecorator('status')(
                            <Select>
                                <Option value={1}>开启</Option>
                                <Option value={2}>禁用</Option>
                            </Select>  
                        )   
                    }   
                </FormItem>
            </Form>
        )
    }
}
RoleForm = Form.create()(RoleForm)

class PermEditForm extends React.Component {

    renderTreeNodes = (data) => {
        data.map((item) => {
            if (item.children) {
                return <TreeNode title={ item.title } key={ item.key }>
                    { this.renderTreeNodes(item.children) }
                </TreeNode>
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
                sm: { span: 20 }
            }
        }
        const detail_info = this.props.detailInfo
        return (
            <Form>
                <FormItem label="角色名称" {...formItemLayout}>
                    <Input disabled placeholder={ detail_info.role_name } />
                </FormItem>
                <FormItem label="状态" {...formItemLayout}>
                    {
                        getFieldDecorator('status',{
                            initialValue: '1'
                        })(
                            <Select>
                                <Option value="1">开启</Option>
                                <Option value="2">禁用</Option>
                            </Select>  
                        )   
                    }   
                </FormItem>
                <Tree>
                    <TreeNode title="平台权限" key="platform_all">

                    </TreeNode>
                </Tree>
            </Form>
        )
    }
}
PermEditForm = Form.create()(PermEditForm)