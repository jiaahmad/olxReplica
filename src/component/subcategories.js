import React from 'react'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {
    Link
  } from "react-router-dom";
  
  

  class Subcategories extends React.Component{
      render(){
        
        return(
            <div className="container-fluid" style={{backgroundColor:"snow",border:"3px",borderColor:"white",borderStyle:"outset",borderTop:"0px",borderRight:"0px",borderLeft:"0px"}}>
            <div className="container" >
                <div className="row" >
                    <div className="col-sm-4">
                        <h5 className="mt-3">ALL CATEGORIES<ArrowDownwardIcon/></h5>
                    </div>
                    <div className="col-sm-8">
                <ul style={{listStyleType:"none",margin:"0",padding:"0",overflow:"hidden"}}>
                    <li style={{float:"left"}}><Link to="/mobilephones" style={{ display: "block",color: "black",textAlign: "center",padding: "16px",textDecoration: "none",fontStyle:"italic"}}>Mobile Phones</Link></li>
                    <li style={{float:"left"}}><Link to="/cars" style={{ display: "block",color: "black",textAlign: "center",padding: "16px",textDecoration: "none",fontStyle:"italic"}}>Cars</Link></li>
                    <li style={{float:"left"}}><Link to="/motorcycles" style={{ display: "block",color: "black",textAlign: "center",padding: "16px",textDecoration: "none",fontStyle:"italic"}}>Motorcycles</Link></li>
                    <li style={{float:"left"}}><Link to="/houses" style={{ display: "block",color: "black",textAlign: "center",padding: "16px",textDecoration: "none",fontStyle:"italic"}}>Houses</Link></li>
                    <li style={{float:"left"}}><Link to="/TVaudiovideos" style={{ display: "block",color: "black",textAlign: "center",padding: "16px",textDecoration: "none",fontStyle:"italic"}}>TV-Audio-Video</Link></li>
                    <li style={{float:"left"}}><Link to="/landandplots" style={{ display: "block",color: "black",textAlign: "center",padding: "16px",textDecoration: "none",fontStyle:"italic"}}>Land & Plots</Link></li>
                    
                </ul>
                </div>
                </div>
                </div>
            </div>

        )
    }
}

export default Subcategories;