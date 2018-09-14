import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Home from './pages/home'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import NoMatch from './pages/nomatch'

import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'
import City from './pages/city'
import Order from './pages/order'
import User from './pages/user'
import BikeMap from './pages/map/bikeMap'
import Bar from './pages/echarts/bar'
import Pie from './pages/echarts/pie'
import Line from './pages/echarts/line'
import Rich from './pages/rich'
import Permission from './pages/permission'

import Common from './common'
import OrderDetail from './pages/order/detail'

export default class IRouter extends React.Component {

    render () {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={ Login }></Route>
                        <Route path="/common" render={ () => 
                            <Common>
                                <Route path="/common/order/detail/:orderId" component={ OrderDetail }></Route>   
                            </Common>
                        }></Route>
                        <Route path="/" render={ () =>
                            <Admin>
                                <Switch>
                                    <Route path="/home" component={ Home }></Route>
                                    <Route path="/ui/buttons" component={ Buttons }></Route>
                                    <Route path="/ui/modals" component={ Modals }></Route>
                                    <Route path="/ui/loadings" component={ Loadings }></Route>
                                    <Route path="/ui/notification" component={ Notice }></Route>
                                    <Route path="/ui/messages" component={ Messages }></Route>
                                    <Route path="/ui/tabs" component={ Tabs }></Route>
                                    <Route path="/ui/gallery" component={ Gallery }></Route>
                                    <Route path="/ui/carousel" component={ Carousel }></Route>
                                    <Route path="/form/login" component={ FormLogin }></Route>
                                    <Route path="/form/reg" component={ FormRegister }></Route>
                                    <Route path="/table/basic" component={ BasicTable }></Route>
                                    <Route path="/table/high" component={ HighTable }></Route>
                                    <Route path="/city" component={ City }></Route>
                                    <Route path="/order" component={ Order }></Route>
                                    <Route path="/user" component={ User }></Route>
                                    <Route path="/bikeMap" component={ BikeMap }></Route>
                                    <Route path="/charts/bar" component={ Bar }></Route>
                                    <Route path="/charts/pie" component={ Pie }></Route>
                                    <Route path="/charts/line" component={ Line }></Route>
                                    <Route path="/rich" component={ Rich }></Route>
                                    <Route path="/permission" component={ Permission }></Route>
                                    <Redirect to="/home" />
                                    <Route component={ NoMatch }></Route>
                                </Switch>
                            </Admin>   
                        }></Route>
                    </Switch>
                </App>
            </HashRouter>
        )
    }

}