import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
// import Home from './pages/home'
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

export default class IRouter extends React.Component {

    render () {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={ Login }></Route>
                    <Route path="/ui" render={ () =>
                        <Admin>
                            <Switch>
                                <Route path="/ui/buttons" component={ Buttons }></Route>
                                <Route path="/ui/modals" component={ Modals }></Route>
                                <Route path="/ui/loadings" component={ Loadings }></Route>
                                <Route path="/ui/notification" component={ Notice }></Route>
                                <Route path="/ui/messages" component={ Messages }></Route>
                                <Route path="/ui/tabs" component={ Tabs }></Route>
                                <Route path="/ui/gallery" component={ Gallery }></Route>
                                <Route path="/ui/carousel" component={ Carousel }></Route>
                                <Route component={ NoMatch }></Route>
                            </Switch>
                        </Admin>   
                    }></Route>
                    <Route path="/form" render={ () =>
                        <Admin>
                            <Switch>
                                <Route path="/form/login" component={ FormLogin }></Route>
                                <Route path="/form/reg" component={ FormRegister }></Route>
                                <Route component={ NoMatch }></Route>
                            </Switch>
                        </Admin>   
                    }></Route>
                    <Route path="/table" render={ () =>
                        <Admin>
                            <Switch>
                                <Route path="/table/basic" component={ BasicTable }></Route>
                                <Route component={ NoMatch }></Route>
                            </Switch>
                        </Admin>   
                    }></Route>
                </App>
            </HashRouter>
        )
    }

}