import React from 'react'
import Header from '../component/header'
import Subcategories from '../component/subcategories'
import Footer from '../component/footer'
import Bottomline from '../component/bottomline'
import Homebackgroundimage from '../component/homebgimg'
import Homesecondadd from '../component/homesecondadd'
import Addcards from '../component/addcards'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
class Home extends React.Component {
    
    render() {

        return (
            <div>

                
                
                <Header />

                <Subcategories />

                
                <Homebackgroundimage />

                <Homesecondadd />
                
                <div className="container-fluid p-5">
                    <div className="row pt-2" style={{backgroundColor:"rgb(255,250,250)",borderBottomStyle:"solid",borderBottomColor:"rgb(245,245,245)"}}>
                        <div className="col-sm-3 d-flex justify-content-center">
                    <h4 style={{fontStyle:"italic"}}>FRESH RECOMMENDATIONS</h4>
                    </div>
                    </div>
                        
                            <Addcards adds={this.props.ad} adh={this.props.adh} adc={this.props.adc} adp={this.props.adp} adtv={this.props.adtv} admotor={this.props.admotor} />
                            
                            
                        
                        
                        
                    
                </div>
                
                    <Footer />

                    <Bottomline/>
                

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        ad:state.firestore.ordered.mobilephone,
        adh:state.firestore.ordered.house,
        adc:state.firestore.ordered.cars,
        adp:state.firestore.ordered.landandplots,
        adtv:state.firestore.ordered.tvaudiovideo,
        admotor:state.firestore.ordered.motorcycles,
        
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection:"mobilephone"},{collection:"house"},{collection:"cars"},{collection:"landandplots"},{collection:"tvaudiovideo"},{collection:"motorcycles"},{collection:"users"}])
    )(Home)