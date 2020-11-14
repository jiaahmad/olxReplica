import React from 'react';
import Header from '../component/header'
import Topadd from '../component/topadd'
import Footer from '../component/footer'
import Bottomline from '../component/bottomline'
import Bottomadd from '../component/bottomadd'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Subcategories from '../component/subcategories'
import {
    Link
} from "react-router-dom";

class Myadds extends React.Component{
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

     {this.props.userid ? <div className="container-fluid">
                <div className="row" >
                    
                    <div className="col-sm-12">
                        <div className="container-fluid">
                    <div className="row mt-5 pt-3" style={{backgroundColor:"rgb(255,250,250)",borderBottomStyle:"solid",borderBottomColor:"rgb(245,245,245)"}}>
                        <div className="col-sm-4 d-flex justify-content-center">
                    <h4 style={{fontStyle:"italic"}}>MY ADDS</h4>
                    </div>
                    </div>
                    <div className="row " style={{backgroundColor:"rgb(255,250,250) "}}>
                    {
                  this.props.ad && this.props.ad.map((v,i)=>{{if(this.props.userid==v.userid){
                      
                        return ( <div key={i} className="col-sm-3 p-4 d-flex justify-content-center">
                        <Link to={'/addetails/'+ v.id} style={{color:"black",textDecoration:"none"}}>     <div className="card" style={{ width: "18rem",height:"34rem" }}>
                                 <img src={v.image} className="card-img-top" alt="add1" />
                                 <div className="card-body">
                    <h5 className="card-title">{v.price}</h5>
                    <p className="card-text">{v.title}</p>
                                 </div>
                                 <ul className="list-group list-group-flush">
                                     <li className="list-group-item">{v.location}</li>
        
                                 </ul>
                                 <div className="card-body">
                  <span  className="card-link">{v.firstname}&nbsp;{v.lastname}</span>
                                     <span  className="card-link">{v.make}</span>
                                 </div>
                             </div> </Link>
                         </div> )}}
                    })
                }
                {
                  this.props.adh && this.props.adh.map((v,i)=>{{if(this.props.userid==v.userid){
                      
                        return ( <div key={i} className="col-sm-3 p-4 d-flex justify-content-center">
                           <Link to={'/addetails/'+ v.id} style={{color:"black",textDecoration:"none"}}>     <div className="card" style={{ width: "18rem",height:"34rem" }}>
                                 <img src={v.image} className="card-img-top" alt="add1" />
                                 <div className="card-body">
                    <h5 className="card-title">{v.price}</h5>
                    <p className="card-text">{v.title}</p>
                                 </div>
                                 <ul className="list-group list-group-flush">
                                     <li className="list-group-item">{v.location}</li>
        
                                 </ul>
                                 <div className="card-body">
                  <span  className="card-link">{v.firstname}&nbsp;{v.lastname}</span>
                                     <span  className="card-link">{v.category}</span>
                                 </div>
                             </div> </Link>
                         </div> )}}
                    })
                }
                {
                  this.props.adc && this.props.adc.map((v,i)=>{{if(this.props.userid==v.userid){
                      
                        return ( <div key={i} className="col-sm-3 p-4 d-flex justify-content-center">
                          <Link to={'/addetails/'+ v.id} style={{color:"black",textDecoration:"none"}}>      <div className="card" style={{ width: "18rem",height:"34rem" }}>
                                 <img src={v.image} className="card-img-top" alt="add1" />
                                 <div className="card-body">
                    <h5 className="card-title">{v.price}</h5>
                    <p className="card-text">{v.title}</p>
                                 </div>
                                 <ul className="list-group list-group-flush">
                                     <li className="list-group-item">{v.location}</li>
        
                                 </ul>
                                 <div className="card-body">
                  <span  className="card-link">{v.firstname}&nbsp;{v.lastname}</span>
                                     <span  className="card-link">{v.make}</span>
                                 </div>
                             </div> </Link>
                         </div> )}}
                    })
                }
                {
                  this.props.adp && this.props.adp.map((v,i)=>{{if(this.props.userid==v.userid){
                      
                        return ( <div key={i} className="col-sm-3 p-4 d-flex justify-content-center">
                           <Link to={'/addetails/'+ v.id} style={{color:"black",textDecoration:"none"}}>     <div className="card" style={{ width: "18rem",height:"34rem" }}>
                                 <img src={v.image} className="card-img-top" alt="add1" />
                                 <div className="card-body">
                    <h5 className="card-title">{v.price}</h5>
                    <p className="card-text">{v.title}</p>
                                 </div>
                                 <ul className="list-group list-group-flush">
                                     <li className="list-group-item">{v.location}</li>
        
                                 </ul>
                                 <div className="card-body">
                  <span  className="card-link">{v.firstname}&nbsp;{v.lastname}</span>
                                     <span  className="card-link">{v.category}</span>
                                 </div>
                             </div> </Link>
                         </div> )}}
                    })
                }
                {
                  this.props.adtv && this.props.adtv.map((v,i)=>{{if(this.props.userid==v.userid){
                      
                        return ( <div key={i} className="col-sm-3 p-4 d-flex justify-content-center">
                            <Link to={'/addetails/'+ v.id} style={{color:"black",textDecoration:"none"}}>    <div className="card" style={{ width: "18rem",height:"34rem" }}>
                                 <img src={v.image} className="card-img-top" alt="add1" />
                                 <div className="card-body">
                    <h5 className="card-title">{v.price}</h5>
                    <p className="card-text">{v.title}</p>
                                 </div>
                                 <ul className="list-group list-group-flush">
                                     <li className="list-group-item">{v.location}</li>
        
                                 </ul>
                                 <div className="card-body">
                  <span  className="card-link">{v.firstname}&nbsp;{v.lastname}</span>
                                     <span  className="card-link">{v.condition}</span>
                                 </div>
                             </div> </Link>
                         </div> )}}
                    })
                }
                {
                  this.props.admotor && this.props.admotor.map((v,i)=>{{if(this.props.userid==v.userid){
                      
                        return ( <div key={i} className="col-sm-3 p-4 d-flex justify-content-center">
                            <Link to={'/addetails/'+ v.id} style={{color:"black",textDecoration:"none"}}>    <div className="card" style={{ width: "18rem",height:"34rem" }}>
                                 <img src={v.image} className="card-img-top" alt="add1" />
                                 <div className="card-body">
                    <h5 className="card-title">{v.price}</h5>
                    <p className="card-text">{v.title}</p>
                                 </div>
                                 <ul className="list-group list-group-flush">
                                     <li className="list-group-item">{v.location}</li>
        
                                 </ul>
                                 <div className="card-body">
                  <span  className="card-link">{v.firstname}&nbsp;{v.lastname}</span>
                                     <span  className="card-link">{v.make}</span>
                                 </div>
                             </div> </Link>
                         </div> )}}
                    })
                }
                    </div>
                    
                        </div>
                    </div>
                </div>
            </div>  : <div className="container p-5 d-flex justify-content-center text-danger"><h2>PLEASE LOGIN OR SIGNUP TO THE WEBSITE</h2></div>                    }
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
        adh:state.firestore.ordered.house,
        adc:state.firestore.ordered.cars,
        adp:state.firestore.ordered.landandplots,
        adtv:state.firestore.ordered.tvaudiovideo,
        admotor:state.firestore.ordered.motorcycles,
        userid:state.firebase.auth.uid
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection:"mobilephone"},{collection:"house"},{collection:"cars"},{collection:"landandplots"},{collection:"tvaudiovideo"},{collection:"motorcycles"},{collection:"users"}])
    )(Myadds)
