import React, { Component } from 'react';

class SendOtp extends Component {
    render() {
        return (

            <div>

                    <div className="sign-up-form">
                        <a href="index.html" className="logo"><img src="images/logo.png" alt="Friend Finder" /></a>
                        <h2 className="text-white">Find My Friends</h2>
                        <div className="line-divider" />
                        <div className="form-wrapper">
                            <p className="signup-text">Signup now and meet awesome people around the world</p>
                            <form action="#">
                                <fieldset className="form-group">
                                    <input type="text" className="form-control" id="example-phone" placeholder="Enter Phone" />
                                </fieldset>
                            </form>
                            <p>By signning up you agree to the terms</p>
                            <button className="btn-secondary">Signup</button>
                        </div>
                        <a href="#">Already have an account?</a>
                        <img className="form-shadow" src="images/bottom-shadow.png" alt="" />
                    </div>{/* Sign Up Form End */} 
             
            </div>


        );
    }
}

export default SendOtp;