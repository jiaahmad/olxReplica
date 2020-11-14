import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
class Footer extends React.Component{
    render(){
        return(
            <div className="container-fluid py-5" id="footer">
            <div className="container" >
                <div className="row">
                    <div className="col-sm-3">
                        <h6>POPULAR CATEGORIES</h6>
                        
                            <i style={{display:"block"}}>Cars</i>
                            <i style={{display:"block"}}>Flats for Rent</i>
                            <i style={{display:"block"}}>Jobs</i>
                            <i style={{display:"block"}}>Mobile Phones</i>
                        

                    </div>
                    <div className="col-sm-3">
                    <h6>TRENDING SEARCHES</h6>
                        
                         <i style={{display:"block"}}>Bikes</i>
                         <i style={{display:"block"}}>Watches</i>
                         <i style={{display:"block"}}>Books</i>
                         <i style={{display:"block"}}>Dogs</i>
                        

                    </div>
                    <div className="col-sm-2">
                    <h6>ABOUT US</h6>
                        
                            <i style={{display:"block"}}>About OLX Group</i>
                            <i style={{display:"block"}}>OLX Blog</i>
                            <i style={{display:"block"}}>Contact Us</i>
                            <i style={{display:"block"}}>OLX for Businesses</i>
                        


                    </div>
                    <div className="col-sm-2">
                    <h6>OLX</h6>
                        
                            <i style={{display:"block"}}>Help</i>
                            <i style={{display:"block"}}>Site Map</i>
                            <i style={{display:"block"}}>Legal & Privacy information</i>
                        


                    </div>
                    <div className="col-sm-2">
                    <h6>Follow Us</h6>
                        <span>
                            <FacebookIcon/>
                            <TwitterIcon/>
                            <YouTubeIcon/>
                            <InstagramIcon/>
                        </span>
                        <br/>
                        <br/>
                        {/* <span>
                            <Playstoreicon/>
                            <Appstoreicon/>
                            
                        </span> */}

                    </div>

                </div>

            </div>
            </div>
        )
    }

}

export default Footer;