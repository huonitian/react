import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Main from './Main'
import About from './../router1/About'
import Topics from './../router1/Topics'
import Home from './Home'

export default class IRouter extends React.Component {

    render () {
        return (
            <Router>
                <Home>
                    <Route path="/main" render={ () =>
                        <Main>
                            <div>
                                <Route path="/main/a" component={ About }></Route>
                            </div>
                        </Main>
                    }></Route>
                    <Route path="/about" component={ About }></Route>   
                    <Route path="/topics" component={ Topics }></Route>
                </Home>
            </Router>
        )
    }

}