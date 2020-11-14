import React from 'react'
import Header from './header'
import Subcategories from './subcategories'
import Homesecondadd from '../component/homesecondadd'
import PersonIcon from '@material-ui/icons/Person'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
class Addetail extends React.Component {
    render() {


        if (this.props.advert || this.props.advertcar || this.props.adverthouse || this.props.adverttvaudiovideo || this.props.advertplot || this.props.advertmotorcycle ) {
            return (
                <div className="details">


                    <div className="sticky-top">
                    <Header />

                    <Subcategories />
                    </div>
                    <div className="mt-3">
                        <Homesecondadd />
                    </div>

                    <div className="container" style={{ backgroundColor: "rgb(255,250,250)" }}>
                        <div className="row mt-5 pt-2 border" >
                            <div className="col-sm-12">
                                <h3>ADVERTISEMENT DETAILS</h3>
                            </div>
                        </div>
                        <div className="row mb-4 p-3 border">
                            <div className="col-sm-7">
                                <div className="row">
                                {
                                this.props.advert ? <img src={this.props.advert.image} width="100%" /> 
                                 : this.props.advertcar ? <img src={this.props.advertcar.image} width="100%" /> 
                                 : this.props.adverthouse ? <img src={this.props.adverthouse.image} width="100%" /> 
                                 : this.props.advertplot ? <img src={this.props.advertplot.image} width="100%" /> 
                                 : this.props.advertmotorcycle ? <img src={this.props.advertmotorcycle.image} width="100%" /> 
                                 : this.props.adverttvaudiovideo ? <img src={this.props.adverttvaudiovideo.image} width="100%" /> : null
                                }
                                </div>
                                <div className="row mt-2 p-4 border">

                                    <div>
                                        <h5>DETAILS</h5>
                                        <div className="row">
                                            <div className="col">MAKE</div>
                                            {
                                this.props.advert ? <div className="col">{this.props.advert.make}</div> 
                                 : this.props.advertcar ? <div className="col">{this.props.advertcar.make}</div> 
                                 : this.props.adverthouse ? <div className="col">{this.props.adverthouse.make}</div> 
                                 : this.props.advertplot ? <div className="col">{this.props.advertplot.make}</div> 
                                 : this.props.advertmotorcycle ? <div className="col">{this.props.advertmotorcycle.make}</div> 
                                 : this.props.adverttvaudiovideo ? <div className="col">{this.props.adverttvaudiovideo.make}</div> : null
                                }
                                            
                                        </div>
                                        <div className="row">
                                            <div className="col">CONDITION</div>
                                            {
                                this.props.advert ? <div className="col">{this.props.advert.condition}</div> 
                                 : this.props.advertcar ? <div className="col">{this.props.advertcar.condition}</div> 
                                 : this.props.adverthouse ? <div className="col">{this.props.adverthouse.condition}</div> 
                                 : this.props.advertplot ? <div className="col">{this.props.advertplot.condition}</div> 
                                 : this.props.advertmotorcycle ? <div className="col">{this.props.advertmotorcycle.condition}</div> 
                                 : this.props.adverttvaudiovideo ? <div className="col">{this.props.adverttvaudiovideo.condition}</div> : null
                                }
                                            
                                        </div>
                                        <div className="row">
                                            <div className="col">LOCATION</div>
                                            {
                                this.props.advert ? <div className="col">{this.props.advert.location}</div> 
                                 : this.props.advertcar ? <div className="col">{this.props.advertcar.location}</div> 
                                 : this.props.adverthouse ? <div className="col">{this.props.adverthouse.location}</div> 
                                 : this.props.advertplot ? <div className="col">{this.props.advertplot.location}</div> 
                                 : this.props.advertmotorcycle ? <div className="col">{this.props.advertmotorcycle.location}</div> 
                                 : this.props.adverttvaudiovideo ? <div className="col">{this.props.adverttvaudiovideo.location}</div> : null
                                }
                                            
                                        </div>
                                        <div className="row">
                                            <div className="col">DATE</div>
                                            {
                                this.props.advert ? <div className="col">{this.props.advert.date}</div> 
                                 : this.props.advertcar ? <div className="col">{this.props.advertcar.date}</div> 
                                 : this.props.adverthouse ? <div className="col">{this.props.adverthouse.date}</div> 
                                 : this.props.advertplot ? <div className="col">{this.props.advertplot.date}</div> 
                                 : this.props.advertmotorcycle ? <div className="col">{this.props.advertmotorcycle.date}</div> 
                                 : this.props.adverttvaudiovideo ? <div className="col">{this.props.adverttvaudiovideo.date}</div> : null
                                }
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2 p-4 border">
                                    <div>
                                        <h5>DESCRIPTION</h5>
                                        {
                                this.props.advert ? <p>{this.props.advert.description}</p> 
                                 : this.props.advertcar ? <p>{this.props.advertcar.description}</p> 
                                 : this.props.adverthouse ? <p>{this.props.adverthouse.description}</p> 
                                 : this.props.advertplot ? <p>{this.props.advertplot.description}</p> 
                                 : this.props.advertmotorcycle ? <p>{this.props.advertmotorcycle.description}</p> 
                                 : this.props.adverttvaudiovideo ? <p>{this.props.adverttvaudiovideo.description}</p> : null
                                }
                                        
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-5">
                                <div className="row py-3 mx-2 border">
                                    <div className="col-sm-12">
                                    {
                                this.props.advert ? <h2>Rs {this.props.advert.price}</h2> 
                                 : this.props.advertcar ? <h2>Rs {this.props.advertcar.price}</h2> 
                                 : this.props.adverthouse ? <h2>Rs {this.props.adverthouse.price}</h2> 
                                 : this.props.advertplot ? <h2>Rs {this.props.advertplot.price}</h2> 
                                 : this.props.advertmotorcycle ? <h2>Rs {this.props.advertmotorcycle.price}</h2> 
                                 : this.props.adverttvaudiovideo ? <h2>Rs {this.props.adverttvaudiovideo.price}</h2> : null
                                }
                                    {
                                this.props.advert ? <p className="pt-1 pb-2">{this.props.advert.title}</p> 
                                 : this.props.advertcar ? <p className="pt-1 pb-2">{this.props.advertcar.title}</p>
                                 : this.props.adverthouse ? <p className="pt-1 pb-2">{this.props.adverthouse.title}</p>
                                 : this.props.advertplot ? <p className="pt-1 pb-2">{this.props.advertplot.title}</p>
                                 : this.props.advertmotorcycle ? <p className="pt-1 pb-2">{this.props.advertmotorcycle.title}</p>
                                 : this.props.adverttvaudiovideo ? <p className="pt-1 pb-2">{this.props.adverttvaudiovideo.title}</p> : null
                                }    
                                        {
                                this.props.advert ? <small>{this.props.advert.location}</small> 
                                 : this.props.advertcar ? <small>{this.props.advertcar.location}</small>
                                 : this.props.adverthouse ? <small>{this.props.adverthouse.location}</small>
                                 : this.props.advertplot ? <small>{this.props.advertplot.location}</small>
                                 : this.props.advertmotorcycle ? <small>{this.props.advertmotorcycle.location}</small>
                                 : this.props.adverttvaudiovideo ? <small>{this.props.adverttvaudiovideo.location}</small> : null
                                }
                                        
                                    </div>
                                </div>
                                <div className="row py-3 mt-3 mx-2 border">
                                    <div className="col-sm-12">
                                        <h2>SELLER DESCRIPTION</h2>
                                        {
                                this.props.advert ?<p className="pt-1 pb-2"><PersonIcon /> {this.props.advert.firstname} {this.props.advert.lastname}</p> 
                                 : this.props.advertcar ?<p className="pt-1 pb-2"><PersonIcon /> {this.props.advertcar.firstname} {this.props.advertcar.lastname}</p>
                                 : this.props.adverthouse ?<p className="pt-1 pb-2"><PersonIcon /> {this.props.adverthouse.firstname} {this.props.adverthouse.lastname}</p>
                                 : this.props.advertplot ?<p className="pt-1 pb-2"><PersonIcon /> {this.props.advertplot.firstname} {this.props.advertplot.lastname}</p>
                                 : this.props.advertmotorcycle ?<p className="pt-1 pb-2"><PersonIcon /> {this.props.advertmotorcycle.firstname} {this.props.advertmotorcycle.lastname}</p>
                                 : this.props.adverttvaudiovideo ?<p className="pt-1 pb-2"><PersonIcon /> {this.props.adverttvaudiovideo.firstname} {this.props.adverttvaudiovideo.lastname}</p>: null
                                }

                                {
                                this.props.advert ?      <small>Contact :- {this.props.advert.phonenumber}</small>
 
                                 : this.props.advertcar ?      <small>Contact :- {this.props.advertcar.phonenumber}</small>

                                 : this.props.adverthouse ?      <small>Contact :- {this.props.adverthouse.phonenumber}</small>

                                 : this.props.advertplot ?      <small>Contact :- {this.props.advertplot.phonenumber}</small>

                                 : this.props.advertmotorcycle ?      <small>Contact :- {this.props.advertmotorcycle.phonenumber}</small>

                                 : this.props.adverttvaudiovideo ?      <small>Contact :- {this.props.adverttvaudiovideo.phonenumber}</small>
                                 : null
                                }        
                                                                      </div>
                                </div>

                            </div>

                        </div>





                    </div>

                </div>
            )
        } else {
            return (
                <div>
                    <Header />

                    <Subcategories />
                    <div className="mt-3">
                        <Homesecondadd />
                    </div>
                    <div className="container p-5 d-flex justify-content-center">
                        <h5>LOADING.....</h5>

                    </div>
                </div>
            )
        }


    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const ads = state.firestore.data.mobilephone;
    const ad = ads ? ads[id] : null
    const adcs = state.firestore.data.cars;
    const adc = adcs ? adcs[id] : null
    const adhs = state.firestore.data.house;
    const adh = adhs ? adhs[id] : null
    const adps = state.firestore.data.landandplots;
    const adp = adps ? adps[id] : null
    const adms = state.firestore.data.motorcycles;
    const adm = adms ? adms[id] : null
    const adts = state.firestore.data.tvaudiovideo;
    const adt = adts ? adts[id] : null

    return {
        advert: ad,
        advertcar: adc,
        adverthouse: adh,
        advertplot: adp,
        advertmotorcycle: adm,
        adverttvaudiovideo: adt
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "mobilephone" },{collection:"house"},{collection:"cars"},{collection:"landandplots"},{collection:"tvaudiovideo"},{collection:"motorcycles"},{collection:"users"}])
)(Addetail);