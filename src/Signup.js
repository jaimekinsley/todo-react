import React, { Component } from 'react'

export default class Signup extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const token = Math.random();

        this.props.handleTokenChange(token);
        this.props.history.push('/todos');
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                email
                <input onChange={(e) => this.setState({ email: e.target.value})} value={this.state.email} />
                </label>
                <label>
                password
                <input onChange={(e) => this.setState({ password: e.target.value})} value={this.state.password} />
                </label>
                <button>sign up</button>
                </form>
            </div>
        )
    }
}
