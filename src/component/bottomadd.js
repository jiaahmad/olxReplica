import React from 'react'
import Btmadd from '../images/bottomadd.PNG'
class Bottomadd extends React.Component{
    render(){
        return(
            <div style={{display:"flex",justifyContent:"center"}}>
                <img className="img-fluid w-100" alt="advertisement" src={Btmadd}/>
            </div>
        )
    }
}

export default Bottomadd;