import React from 'react'
import Topaddimg from '../images/topadd.png'
class Topadd extends React.Component{
    render(){
        return(
            <div className="container d-flex justify-content-center">

            <img src={Topaddimg} className="img-fluid"/>

            </div>
        )
    }
}

export default Topadd;