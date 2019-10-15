import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import { NotFound } from './pages/NotFound'
import { Masthead } from './components/Masthead'
import { Contact } from './pages/Contact'
import Login from './pages/Login'
import { Meta } from './components/Meta'
import SignUp from './pages/SignUp'
import Logout from './pages/Logout'
import { Root } from './pages/Root'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Root} />
                </Switch>
            </BrowserRouter>
        )
    }
}
