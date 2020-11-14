import React from 'react'
import {
    Link
} from "react-router-dom";

class Sellandlogin extends React.Component {

    
    render() {
        return (
            <div className="col-sm-3 pt-2">
                
                    <Link to="/login"><button style={{ color: "black", textDecoration: "underline", border: "none", backgroundColor: "transparent"}}>
                        <b>LOGIN</b>
                    </button> </Link>
                

                
                    
                    <Link to="/login"> <button  className="btn-grad" >SELL</button> </Link>
                
            </div>
        )
    }
}

export default Sellandlogin;