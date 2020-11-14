import React from 'react'
import {
    Link
} from "react-router-dom";

class Formcategory extends React.Component {
    render() {
        return (
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="row ">
                        <div className="col-sm-12 d-flex justify-content-center">
                            <h2 style={{fontStyle:"oblique"}}>POST YOUR ADD</h2>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-sm-12 d-flex justify-content-center">
                            <div className="category-space p-5 m-4">
                                <div className="row">
                                <div className="col-sm-8 px-4 py-4">
                                <h5 style={{fontStyle:"revert"}}>CHOOSE A CATEGORY</h5>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-8">
                                <div className="list-group">
                                    <Link to="/mobile" className="list-group-item list-group-item-action list-group-item-secondary font-weight-bold">
                                        Mobile Phones</Link>
                                    <Link to="/car" className="list-group-item list-group-item-action list-group-item-secondary font-weight-bold">Cars</Link>
                                    <Link to="/motorcycle" className="list-group-item list-group-item-action list-group-item-secondary font-weight-bold">Motorcycles</Link>
                                    <Link to="/house" className="list-group-item list-group-item-action list-group-item-secondary font-weight-bold">Houses</Link>
                                    <Link to="/tvaudiovideo" className="list-group-item list-group-item-action list-group-item-secondary font-weight-bold" >TV -Audio-Video</Link>
                                    <Link to="/landandplot" className="list-group-item list-group-item-action list-group-item-secondary font-weight-bold" >Land & Plots</Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Formcategory;