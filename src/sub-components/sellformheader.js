import React from 'react'
import logo from '../images/download.png'
import Navbar from 'react-bootstrap/Navbar'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
    Link
} from "react-router-dom";

class Sellformheader extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">



                    <div className="container-fluid ">
                        <div className="row" >
                            <div className="col-sm-3 d-flex align-content-center" >
                                <button style={{ border: "none", backgroundColor: "transparent" }}><Link to="/" style={{ color: "black" }}><ArrowBackIcon /></Link></button>
                            </div>
                            <div className="col-sm-9" >
                                <Navbar.Brand ><img src={logo} alt="logo" width="60%" height="55px" /></Navbar.Brand>
                            </div>
                        </div>

                    </div>

                </Navbar>

            </div>
        )
    }
}

export default Sellformheader;