import React from 'react'
import {
    Link
} from "react-router-dom";

class Addcards extends React.Component {


    render() {

        return (
            <div className="row " style={{ backgroundColor: "rgb(255,250,250) " }}>
                {
                    this.props.adds && this.props.adds.map((v, i) => {
                        return (
                            
                            <div key={i} className="col-sm-3 p-4 d-flex justify-content-center">


                           <Link to={'/addetails/' + v.id} style={{ color: "black", textDecoration: "none" }}>   <div className="card" style={{ width: "18rem", height: "34rem" }}>
                                    <img src={v.image} className="card-img-top" alt="add1" />
                                    <div className="card-body">
                                        <h5 className="card-title">{v.price}</h5>
                                        <p className="card-text">{v.title}</p>
                                    </div>

                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{v.location}</li>

                                    </ul>
                                    <div className="card-body">
                                        <span className="card-link">{v.firstname}&nbsp;{v.lastname}</span>

                                        <span className="card-link">{v.make}</span>
                                    </div>
                        </div> </Link>
                        
                            </div>


                        )
                    })
                }

                {
                    this.props.adh && this.props.adh.map((v, i) => {
                        return (<div key={i} className="col-sm-3 p-4 d-flex justify-content-center">
                            <Link to={'/addetails/' + v.id} style={{ color: "black", textDecoration: "none" }}>   <div className="card" style={{ width: "18rem", height: "34rem" }}>
                                <img src={v.image} className="card-img-top" alt="add1" />
                                <div className="card-body">
                                    <h5 className="card-title">{v.price}</h5>
                                    <p className="card-text">{v.title}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{v.location}</li>

                                </ul>
                                <div className="card-body">
                                    <span className="card-link">{v.firstname}&nbsp;{v.lastname}</span>
                                    <span className="card-link">{v.category}</span>
                                </div>
                            </div> </Link>
                        </div>)
                    })
                }

                {
                    this.props.adc && this.props.adc.map((v, i) => {
                        return (<div key={i} className="col-sm-3 p-4 d-flex justify-content-center">
                            <Link to={'/addetails/' + v.id} style={{ color: "black", textDecoration: "none" }}>  <div className="card" style={{ width: "18rem", height: "34rem" }}>
                                <img src={v.image} className="card-img-top" alt="add1" />
                                <div className="card-body">
                                    <h5 className="card-title">{v.price}</h5>
                                    <p className="card-text">{v.title}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{v.location}</li>

                                </ul>
                                <div className="card-body">
                                    <span className="card-link">{v.firstname}&nbsp;{v.lastname}</span>
                                    <span className="card-link">{v.make}</span>
                                </div>
                            </div> </Link>
                        </div>)
                    })
                }


                {
                    this.props.adp && this.props.adp.map((v, i) => {
                        return (<div key={i} className="col-sm-3 p-4 d-flex justify-content-center">
                            <Link to={'/addetails/' + v.id} style={{ color: "black", textDecoration: "none" }}>  <div className="card" style={{ width: "18rem", height: "34rem" }}>
                                <img src={v.image} className="card-img-top" alt="add1" />
                                <div className="card-body">
                                    <h5 className="card-title">{v.price}</h5>
                                    <p className="card-text">{v.title}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{v.location}</li>

                                </ul>
                                <div className="card-body">
                                    <span className="card-link">{v.firstname}&nbsp;{v.lastname}</span>
                                    <span className="card-link">{v.category}</span>
                                </div>
                            </div> </Link>
                        </div>)
                    })
                }

                {
                    this.props.adtv && this.props.adtv.map((v, i) => {
                        return (<div key={i} className="col-sm-3 p-4 d-flex justify-content-center">
                            <Link to={'/addetails/' + v.id} style={{ color: "black", textDecoration: "none" }}>    <div className="card" style={{ width: "18rem", height: "34rem" }}>
                                <img src={v.image} className="card-img-top" alt="add1" />
                                <div className="card-body">
                                    <h5 className="card-title">{v.price}</h5>
                                    <p className="card-text">{v.title}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{v.location}</li>

                                </ul>
                                <div className="card-body">
                                    <span className="card-link">{v.firstname}&nbsp;{v.lastname}</span>
                                    <span className="card-link">{v.condition}</span>
                                </div>
                            </div> </Link>
                        </div>)
                    })
                }

                {
                    this.props.admotor && this.props.admotor.map((v, i) => {
                        return (<div key={i} className="col-sm-3 p-4 d-flex justify-content-center">
                            <Link to={'/addetails/' + v.id} style={{ color: "black", textDecoration: "none" }}>    <div className="card" style={{ width: "18rem", height: "34rem" }}>
                                <img src={v.image} className="card-img-top" alt="add1" />
                                <div className="card-body">
                                    <h5 className="card-title">{v.price}</h5>
                                    <p className="card-text">{v.title}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{v.location}</li>

                                </ul>
                                <div className="card-body">
                                    <span className="card-link">{v.firstname}&nbsp;{v.lastname}</span>

                                    <span className="card-link">{v.make}</span>
                                </div>
                            </div> </Link>
                        </div>)
                    })
                }

            </div>










        )
    }
}




export default Addcards;