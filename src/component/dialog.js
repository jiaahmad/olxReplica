import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../store/action/auth_action'
import {
    Link
} from "react-router-dom";

class Dialog extends React.Component{

    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        }) 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
        this.props.history.push("/")
    }

    render(){

        return(
            <div className="bag-modal">
                <form onSubmit={this.handleSubmit}>
             <div className="modal-cont">
            
             <button onClick={() => this.props.history.push("/")} className="cross">+</button> 

            <div>
                <picture>
                    <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.png" alt="olx logo" height="150px"
                        width="150px"/>
                </picture>
            </div>
            <div className="caption">
                <span>
                    Help make OLX safer place to buy and sell
                </span>
            </div>
            <center>
        {this.props.authError ? <p>{this.props.authError}</p> : null }
            </center>
            
            <div className="login-btn-space py-3">
                
                <input required type="text" className="login-butn login" id="email" placeholder="Email Address" onChange={this.handleChange}/>
                <input required minLength="9" type="password" className="login-butn login" id="password" placeholder="Password" onChange={this.handleChange}/>
                <button type="submit" className="login-butn btn-dark">Log In</button>
                <h6>OR</h6>
              <Link to="/signup">  <button className="login-butn btn-dark">Sign Up</button> </Link>
            </div>

             </div>
             </form>
         </div> 
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError:state.auth.authError
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signIn:(creds)=>dispatch(signIn(creds))
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (Dialog);