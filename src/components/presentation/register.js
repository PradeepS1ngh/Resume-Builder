

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

import * as authAction from '../../reducers/actions/authAction'


class Contact extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: "",
            pwd : "",
            CONpwd: "",
            firebaseauth: this.props.fireBaseAuth,
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ firebaseauth: nextProps.fireBaseAuth });
    } 

    onChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    onSubmit = () => {
        
        this.state.pwd === this.state.CONpwd ? this.props.authActionbind.userRegister(this.state.name, this.state.pwd) : alert("PassWord MISMATCH")
        
    }

    render() {

        if (this.state.firebaseauth.uid !== undefined) {
            console.log(this.state.firebaseauth.uid);
            return <Redirect to="/getting-started" />
        }
        return (
            <div className="container med contact">
                <div className="section funnel-section">
                    <div className="loginContainer">
                        <div className="resumeheading">
                            <h2>Resume</h2>
                            <h3>Builder</h3>
                        </div>
                        <div className="logobox" style={{ position: "absolute", top: "10%", left: "5%" }}>
                            <img src="/images/Register.svg" alt="logo" style={{ width: "300px", height: "300px" }} />
                        </div>
                        <div className="form-card " style={{top:"-1px", height:"90%"}}>
                            <div className="loginheading" ><h2 >REGISTER</h2></div>
                            <div className="form-section" style={{ marginTop: "30px" }}>
                                <div className="input-group full"><label>Enter Name</label>
                                    <div className="effect"><input type="text" name="name" onChange={this.onChange} value={this.state.name} /><span></span>
                                    </div>
                                    <div className="error"></div>
                                </div>

                                <div className="input-group full"><label>Password</label>
                                    <div className="effect"><input type="password" name="pwd" onChange={this.onChange} value={this.state.pwd} /><span></span>
                                    </div>
                                    <div className="error"></div>
                                </div>

                                <div className="input-group full"><label>Confirm Password</label>
                                    <div className="effect"><input type="password" name="CONpwd" onChange={this.onChange} value={this.state.CONpwd} /><span></span>
                                    </div>
                                    <div className="error"></div>
                                </div>

                                <div className="form-buttons">
                                    <button style={{ outline: "none" }} onClick={this.onSubmit} className="btn hvr-float-shadow" type='button'>Next</button>
                                </div>
                                
                            </div>

                        </div>
                    </div >
                </div>
            </div>
            // <div className="container med contact">
            //     <div className="section funnel-section" >
            //         <div className="form-card" style={{ width: "35%", position: "relative", left:"31%"}}>
            //             <h2 className="form-heading center RegisterSign" style={{ color: "blue" }}>REGISTER</h2>
            //             <div className="form-section">

                           
            //             </div>

            //         </div>

            //     </div>
            // </div>
        );
    }
}

// return auth.uid === undefined  ? redirect : next Component

const mapStateToProps = (state) => {
    return {
        auth: state.authSection,
        fireBaseAuth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActionbind: bindActionCreators(authAction, dispatch)
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Contact);