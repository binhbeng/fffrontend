import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from '../components/LoginPage';
import Nav from '../components/Nav';
import SendOtp from '../components/SendOtp';
import SideBarLeft from '../components/SideBarLeft';
class routerUrl extends Component {
    render() {
        return (
            
                <div>
                    <Switch>
                        <Route path="/home">
                            <Nav />
                            <SideBarLeft />
                        </Route>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <Route path="/send-otp">
                            <SendOtp />
                        </Route>
                    </Switch>
                </div>
            
        );
    }
}

export default routerUrl;