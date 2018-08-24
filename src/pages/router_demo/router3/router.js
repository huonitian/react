import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './Main'
import Info from './info'
import About from './../router1/About'
import Topics from './../router1/Topics'
import Home from './Home'
import NoMatch from './NoMatch'

export default class IRouter extends React.Component {

    render () {
        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={ () =>
                            <Main>
                                <div>
                                    <Route path="/main/:value" component={ Info }></Route>
                                </div>
                            </Main>
                        }></Route>
                        <Route path="/about" component={ About }></Route>   
                        <Route path="/topics" component={ Topics }></Route>
                        <Route component={ NoMatch }></Route>
                    </Switch>
                </Home>
            </Router>
        )
    }

}