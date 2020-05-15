import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Todos from './Todos.js';
import Login from './Login.js';
import Signup from './Signup.js';
import PrivateRoute from './PrivateRoute.js';

export default class App extends Component {
    state = { token: localStorage.getItem('TOKEN')}

    handleTokenChange = (myToken) => {
        this.setState({ token: myToken });
        localStorage.setItem('TOKEN', myToken);
    }


    render() {
        return (
            <div>
                <Router>
                <ul>
                { this.state.toke && <div> Welcome back! </div> }
                { this.state.token && <Link to="/todos"><div>To-dos</div></Link> }
                <Link to="/login"><div>Login</div></Link>
                <Link to="/signup"><div>Sign Up</div></Link>
                <button onClick={()=>this.handleTokenChange('')}>Log Out</button>
                </ul>
                    <Switch>
                        <Route
                            exact path="/login" render={(routerProps) => <Login handleTokenChange={this.handleTokenChange}
                            {...routerProps} />}
                        />
                        <Route
                            exact path="/signup"
                            render={(routerProps) => <Signup
                            handleTokenChange={this.handleTokenChange}
                            {...routerProps}/>}
                        />
                        <PrivateRoute
                        exact path="/todos"
                        token={this.state.token}
                        render={(routerProps) => <Todos
                        {...routerProps}/>}/>
                    </Switch>
                </Router>
            </div>
        )
    }}