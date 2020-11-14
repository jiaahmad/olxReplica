import React from 'react';
import { connect } from 'react-redux';
import { createAddmotorcycle } from '../store/action/action'
import Sellformheader from '../sub-components/sellformheader'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import {
    Link
} from "react-router-dom";
import Bottomline from './bottomline';

class Sellmotorcycleform extends React.Component {

    contructor() {

        this.state = {
            category: '',
            location: '',
            price: '',
            condition: '',
            description: '',
            image: '',
            title: '',
            date: '',
            firstname: '',
            lastname: '',
            phonenumber:'',
            userid:''

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    handleImage = (e) => {
        const fn = this.props.firstname.charAt(0).toUpperCase() + this.props.firstname.substr(1).toLowerCase()
        const ln = this.props.lastname.charAt(0).toUpperCase() + this.props.lastname.substr(1).toLowerCase()
        const userid = this.props.userid
        const pn = this.props.phonenumber
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({
                    image: reader.result,
                    firstname: fn,
                    lastname: ln,
                    phonenumber:pn,
                    userid:userid
                })
            }
        }
        reader.readAsDataURL(e.target.files[0])

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createAddmotorcycle(this.state)
        this.props.history.push("/")
    }


    render() {
        return (

            <div >
                <Sellformheader />

                <form onSubmit={this.handleSubmit} action="/sell" method="GET">
                    <div className="container-fluid py-5">
                        <div className="container">
                            <div className="row ">
                                <div className="col-sm-12 d-flex justify-content-center">
                                    <h2 style={{ fontStyle: "oblique" }}>POST YOUR ADD</h2>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-sm-12 d-flex justify-content-center">
                                    <div className="category-space p-5 m-4">
                                        <div className="row" style={{ borderBottomStyle: "groove", borderBottomWidth: "2px" }}>
                                            <div className="col-sm-12 px-4 py-4">
                                                <h5 style={{ fontStyle: "revert" }}>SELECTED CATEGORY</h5>
                                                <br></br>
                                                <i>Motorcycles</i>&nbsp;&nbsp;<Link to="/sell" className="text-black-50">Change</Link>
                                            </div>
                                        </div>
                                        <div className="row py-3" style={{ borderBottomStyle: "groove", borderBottomWidth: "2px" }}>
                                            <div className="col-sm-10">

                                                <h5 className="my-3" style={{ fontStyle: "oblique" }}>INCLUDE SOME DETAILS</h5>

                                                <div className="form-group">
                                                    <label htmlFor="make">make *</label>
                                                    <select onChange={this.handleChange} required className="form-control" id="make">
                                                        <option selected="selected" disabled>MAKE</option>
                                                        <option>Suzuki</option>
                                                        <option>Unique</option>
                                                        <option>Honda</option>
                                                        <option>United</option>
                                                        <option>Yamaha</option>
                                                        <option>Other Brands</option>
                                                        <option>Super Power</option>
                                                        <option>Road Prince</option>
                                                        <option>Metro</option>
                                                        <option>Super Star</option>
                                                    </select>
                                                </div>

                                                <div className="form-group py-3 ">
                                                    <label htmlFor="date">date *</label>
                                                    <input required onChange={this.handleChange} type="date" id="date" className="form-control" />

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="category">category *</label>
                                                    <select onChange={this.handleChange} required className="form-control" id="category">
                                                        <option selected="selected" disabled>CATEGORY</option>
                                                        <option>Motorcycles</option>
                                                        <option>Spare Parts</option>
                                                        <option>Bicycles</option>
                                                        <option>ATV & Quads</option>
                                                        <option>Scooters</option>

                                                    </select>

                                                </div>



                                                <div className="form-group">
                                                    <label htmlFor="condition">condition *</label>
                                                    <select onChange={this.handleChange} required className="form-control" id="condition">
                                                        <option selected="selected" disabled>CONDITION</option>
                                                        <option>New</option>
                                                        <option>Used</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="title">Ad title *</label>
                                                    <input required onChange={this.handleChange} type="text" className="form-control" id="title" />
                                                    <small className="form-text text-muted">Mention the key features of your item (e.g. brand, model, age, type)</small>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="description">Ad description</label>
                                                    <textarea required onChange={this.handleChange} className="form-control" id="description" rows="3"></textarea>
                                                    <small className="form-text text-muted">Include condition, features and reason for selling</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row py-3" style={{ borderBottomStyle: "groove", borderBottomWidth: "2px" }}>
                                            <div className="col-sm-10">

                                                <h5 className="my-3" style={{ fontStyle: "oblique" }}>SET A PRICE *</h5>

                                                <div className="form-group">
                                                    <label htmlFor="price">price *</label>
                                                    <input required onChange={this.handleChange} type="number" className="form-control" id="price" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row py-3" style={{ borderBottomStyle: "groove", borderBottomWidth: "2px" }}>
                                            <div className="col-sm-10">

                                                <h5 className="my-3" style={{ fontStyle: "oblique" }}>UPLOAD PHOTO *</h5>

                                                <div className="form-group">
                                            <label htmlFor="image" className="mx-1 my-1"><AddAPhotoIcon /></label>    
                                            <input required onChange={this.handleImage} type="file" accept="image/*" name="file" id="image"  style={{display:"block"}}/>
                                            </div>

                                            </div>
                                        </div>

                                        <div className="row py-3" style={{ borderBottomStyle: "groove", borderBottomWidth: "2px" }}>
                                            <div className="col-sm-10">

                                                <h5 className="my-3" style={{ fontStyle: "oblique" }}>YOUR LOCATION *</h5>

                                                <div className="form-group">
                                                    <label htmlFor="location">state *</label>
                                                    <select required onChange={this.handleChange} className="form-control" id="location">
                                                        <option selected="selected" disabled>STATE</option>
                                                        <option>Azad Kashmir</option>
                                                        <option>Balochistan</option>
                                                        <option>Islamabad Capital Territory</option>
                                                        <option>Khyber Pakhtunkhwa</option>
                                                        <option>Punjab</option>
                                                        <option>Northern Areas</option>
                                                        <option>Sindh</option>

                                                    </select>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="row py-5" >
                                            <div className="col-sm-10">
                                                <button type="submit" className="btn btn-outline-dark mx-1">Submit</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>

                <Bottomline />
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.firebase.profile.firstName)
    return {
        firstname: state.firebase.profile.firstName,
        lastname: state.firebase.profile.lastName,
        phonenumber:state.firebase.profile.phonenumber,
        userid:state.firebase.auth.uid

    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        createAddmotorcycle: (adm) => dispatch(createAddmotorcycle(adm))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sellmotorcycleform);