import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class LoginPage extends Component {
    // handleSubmit = e => {
    //     e.preventDefault();
    //     const data = {
    //         username: this.username,
    //         password: this.password
    //     }
    //     axios.post('http://localhost:1337/user/login-by-password', data)
    //         .then(res => console.log(res))
    // }

    constructor(props) {
        super(props);
        this.state = {
            phone: null,
            password: null
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleChange2 = this.handleChange2.bind(this);
    }
    handleChange = e => {
        e.preventDefault();
        this.setState({ phone: e.target.value })
        console.log(this.state)
    };
    handleChange2 = e => {
        e.preventDefault();
        this.setState({ password: e.target.value })
        console.log(this.state)
    };
    login2 = () => {
        console.log('this is');

        fetch('http://localhost:1337/user/login-by-password', {
           // mode : "no-cors",
            method: "POST",
            body: JSON.stringify(this.state)
        }).then((response) => {
            response.json().then((result) => {
                console.warn("warn", result)
                localStorage.setItem('login', JSON.stringify({
                    login: true,
                    token: result.accessToken
                }))
            })
        })
    }

    render() {
        return (
            <div>
                <div className="sign-up-form">
                    <a href="index.html" className="logo"><img src="images/logo.png" alt="Friend Finder" /></a>
                    <h2 className="text-white">Find My Friends {this.state.username}</h2>
                    <div className="line-divider" />
                    <div className="form-wrapper">
                        <p className="signup-text">Signup now and meet awesome people around the world</p>

                        <fieldset className="form-group">
                            <input name="fname" type="text" className="form-control" id="example-name" placeholder="Enter name"
                                onChange={this.handleChange}
                            />
                        </fieldset>
                        <fieldset className="form-group">
                            <input type="password" name="fpassword" className="form-control" id="example-password" placeholder="Enter a password"
                                onChange={this.handleChange2}
                            />
                        </fieldset>

                        <p>By signning up you agree to the terms</p>
                        <Link to="/home">  <button onClick={this.login2} className="btn-secondary">SignIn</button></Link>
                    </div>
                    <a href="#">Already have an account?</a>
                    <img className="form-shadow" src="images/bottom-shadow.png" alt="" />
                </div>{/* Sign Up Form End */}

            </div>
        );
    }
}

export default LoginPage;