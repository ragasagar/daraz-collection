import React, { Component } from 'react';
import "./sign-in.style.scss";

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: "",
            password: ""
        })
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return <div className="sign-in">
            <h1>I already have account</h1>

            <form onSubmit={this.handleSubmit}>
                <input type="email" value={this.state.email} name="email" onChange={this.handleChange} />
                <label>email</label>
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <label>password</label>
                <input type="submit" name="submit" />
            </form>
        </div>
    }

}

export default SignIn;