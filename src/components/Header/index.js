import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { exitClear } from './../../redux/action'

class Header extends React.Component {
    state = {}

    componentWillMount () {
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        },1000)

        this.getWeatherAPIData()
    }

    getWeatherAPIData () {
        let city = 'shenzhen'
        axios.jsonp({
            url: "http://api.map.baidu.com/telematics/v3/weather?location="+ city +"&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
        })
        .then((res) => {
            if (res.status === 'success') {
                let data = res.results[0].weather_data[0]
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                })
            }
        })
    }

    //退出登录
    handleExit = () => {
        const { dispatch } = this.props;
        dispatch(exitClear())
        this.props.history.push('/login')
    }

    render () {
        const menuType = this.props.menuType
        return (
            <div className="header">
                <Row className="header-top">
                    {
                        menuType?
                        <Col span="6" className="logo">
                            <img src="/logo-ant.svg" alt=""/>
                            <span>IMooc 通用管理系统</span>
                        </Col>:""
                    }
                    <Col span={ menuType?18:24 }>
                        <span>欢迎，{ this.props.userName }</span>
                        <a href="javascript:;" onClick={ this.handleExit }>退出</a>
                    </Col>
                </Row>
                {
                    menuType?"":
                        <Row className="breadcrumb">
                            <Col span="4" className="breadcrumb-title">
                                { this.props.menuName }
                            </Col>
                            <Col span="20" className="weather">
                                <span className="date">{ this.state.sysTime }</span>
                                <span className="weather-img">
                                    <img src={ this.state.dayPictureUrl } alt=""/>
                                </span>
                                <span className="weather-detail">{ this.state.weather }</span>
                            </Col>
                        </Row>
                }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        menuName: state.menuName,
        userName: state.userName
    }
}
export default connect(mapStateToProps)(withRouter(Header));