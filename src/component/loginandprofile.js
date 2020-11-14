import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../store/action/auth_action'
import {
    Link
} from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
class Loginandprofile extends React.Component {
    logOut = () => {
        
        this.props.signOut();
        window.location="/"

        
    }
    
    render() {
        return (
            <div className="col-sm-3 pt-2">

                
                <div className="btn-group">
                    <button className="btn btn-secondary btn-sm" type="button">
                    <AccountCircleIcon/> <p>{this.props.firstname}&nbsp;{this.props.lastname}</p>
                    </button>
                    <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                    <a style={{cursor:"pointer"}} className="dropdown-item" onClick={this.logOut}>Log Out</a>
                        <Link to="/myadds" style={{cursor:"pointer"}} className="dropdown-item" >My Adds</Link>
                        <a style={{cursor:"pointer"}} className="dropdown-item" >Settings</a>
                    </div>
                </div>

                <Link to="/sell"><button className="btn-grad" >SELL</button> </Link>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut:() => {dispatch(signOut())}
    }
}

export default connect(null,mapDispatchToProps)(Loginandprofile);