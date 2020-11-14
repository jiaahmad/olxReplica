import React from 'react'
import logo from '../images/download.png'
import Navbar from 'react-bootstrap/Navbar'
import CustomizedInputBase from '../sub-components/input'
import NativeSelects from '../sub-components/select'
import {
    Link
} from "react-router-dom";
import Sellandlogin from '../component/loginandsell'
import Loginandprofile from '../component/loginandprofile'
import { connect } from 'react-redux'
class Header extends React.Component {
    render() {
        
        const headerLinks = this.props.auth.uid ? <Loginandprofile lastname={this.props.user.lastName} firstname={this.props.user.firstName} /> : <Sellandlogin  />; 
        return (
            <div>

                <Navbar bg="light" expand="lg">


                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <div className="container-fluid">
                            <div className="row" style={{ margin: "10px auto 10px auto" }}>
                                <div className="col-sm-1" >
                                    <Navbar.Brand ><Link to="/"><img src={logo} alt="logo" width="130%" height="55px" /></Link></Navbar.Brand>
                                </div>
                                <div className="col-sm-3">
                                    {/* <input placeholder="Pakistan" style={{ width: "100%", height: "40px", margin: "10px",borderRadius:"12px" }} /> */}
                                    <NativeSelects />
                                </div>
                                <div className="col-sm-5">
                                    <CustomizedInputBase />
                                    {/* <input placeholder="Find Cars,Mobile Phone and more" style={{ width: "100%", height: "40px",marginTop:"10px",marginBottom:"10px",borderRadius:"12px" }} /> */}
                                </div>
                                { headerLinks }

                                
                            </div>

                        </div>
                    </Navbar.Collapse>
                </Navbar>





            </div>

        )
    }
}

const mapStateToProps = (state) => {
   return {
        auth:state.firebase.auth,
        user:state.firebase.profile
   }
}

export default connect(mapStateToProps) (Header);