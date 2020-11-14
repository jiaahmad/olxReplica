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

class Landandplots extends React.Component{
    constructor(){
        super()
        this.state = {
            adds : [
                {img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",price:"2000",description:"lorem itpsum flan flan",date:"10/28/2020"},
                {img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",price:"2000",description:"lorem itpsum flan flan",date:"10/28/2020"},
                {img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",price:"2000",description:"lorem itpsum flan flan",date:"10/28/2020"},
                {img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",price:"2000",description:"lorem itpsum flan flan",date:"10/28/2020"},
                {img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",price:"2000",description:"lorem itpsum flan flan",date:"10/28/2020"},
                {img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",price:"2000",description:"lorem itpsum flan flan",date:"10/28/2020"},
            ]
        }
    }
    render(){
        return(
          <div >

            <Header/>

            <Subcategories/>

            <Topadd/>

            <div className="container-fluid">
                <div className="row" >
                    <div className="col-sm-2 mt-2 d-flex justify-content-end" >
                        <Subheaderdivider sign={this.props.location.pathname}/>

                    </div>
                    <div className="col-sm-10">
                        <div className="container-fluid">
                    <div className="row mt-5 pt-3" style={{backgroundColor:"rgb(255,250,250)",borderBottomStyle:"solid",borderBottomColor:"rgb(245,245,245)"}}>
                        <div className="col-sm-4 d-flex justify-content-center">
                    <h4 style={{fontStyle:"italic"}}>FRESH RECOMMENDATIONS</h4>
                    </div>
                    </div>
                    <Addcards adp={this.props.ad}/>
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
        ad:state.firestore.ordered.landandplots,

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection:"landandplots"}])
    )(Landandplots)


