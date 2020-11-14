import React from 'react';
import homebgimg from '../images/Capture.PNG'
class Homebackgroundimage extends React.Component{
    render(){
        return(
            <div style={{backgroundImage:`url(${homebgimg})`,backgroundRepeat:"no-repeat",backgroundSize: "contain",height:"17vw",width:"100%"}} >
                

            </div>
        )
    }
}

export default Homebackgroundimage;