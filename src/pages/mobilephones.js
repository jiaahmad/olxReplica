import React from 'react';
import Header from '../component/header'
import Subcategories from '../component/subcategories'
import Topadd from '../component/topadd'
import Subheaderdivider from '../component/subheaderdivider';
import Footer from '../component/footer'
import Bottomline from '../component/bottomline'
import Addcards from '../component/addcards'
import Bottomadd from '../component/bottomadd'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Mobilephones extends React.Component{
    constructor(){
        super()
        this.state = {
          
        }
    }
    
    

      render(){

        return(
          <div>

            <Header/>

            <Subcategories/>

            <Topadd/>

            <div className="container-fluid">
                <div className="row" >
                    <div className="col-sm-2 mt-2 d-flex justify-content-end" >
                        <Subheaderdivider  sign={this.props.location.pathname}/>

                    </div>
                    <div className="col-sm-10">
                        <div className="container-fluid">
                    <div className="row mt-5 pt-3" style={{backgroundColor:"rgb(255,250,250)",borderBottomStyle:"solid",borderBottomColor:"rgb(245,245,245)"}}>
                        <div className="col-sm-4 d-flex justify-content-center">
                    <h4 style={{fontStyle:"italic"}}>FRESH RECOMMENDATIONS</h4>
                    </div>
                    </div>
                       <Addcards adds={this.props.ad} />
                    
                    
                    
                    
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>

            <Bottomadd/>

            <Footer/>
            <Bottomline/>

            </div>  
        )
    }
}

const mapStateToProps = (state) => {

    return {
        ad:state.firestore.ordered.mobilephone,

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection:"mobilephone"}])
    )(Mobilephones)
