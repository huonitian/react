import React from 'react'
import { Card, Button, Modal } from 'antd'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

export default class RichText extends React.Component {

    state = {
        showRichText: false,
        editorState: ''
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        })
    }

    onContentStateChange = (contentState) => {
        this.setState({
            contentState
        })
    }

    handleClearContent = () => {
        this.setState({
            editorState: ''
        })    
    }

    handleGetText = () => {
        this.setState({
            showRichText: true
        })    
    }

    render () {
        const { editorState } = this.state;
        return (
            <div>
                <Card>
                    <Button type="primary" style={{ marginRight: 10 }} onClick={ this.handleClearContent }>清空内容</Button>
                    <Button type="primary" onClick={ this.handleGetText }>获取HTML文本</Button>
                </Card>
                <Card title="富文本编辑器">
                    <Editor
                        editorState={editorState}
                        onContentStateChange={this.onContentStateChange}
                        onEditorStateChange={this.onEditorStateChange}
                    />  
                </Card>
                <Modal 
                    title="富文本"
                    visible={this.state.showRichText}
                    onCancel={() => {
                        this.setState({
                            showRichText: false
                        })
                    }}
                    footer={null}
                >
                    { draftToHtml(this.state.contentState) }
                </Modal>
                {/* html字符串转成html标签 */}
               <div dangerouslySetInnerHTML={{ __html: draftToHtml(this.state.contentState)}}></div>
            </div>
        )
    }

}