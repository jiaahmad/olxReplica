import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TabletIcon from '@material-ui/icons/Tablet';
import HeadsetIcon from '@material-ui/icons/Headset';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CommuteIcon from '@material-ui/icons/Commute';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import HouseIcon from '@material-ui/icons/House';
import AppsIcon from '@material-ui/icons/Apps';
import Navbar from 'react-bootstrap/Navbar'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
class SubheaderDividers extends React.Component {
  constructor(){
    super()
    this.state = {
      catdropdown : "",
      catdropup:"hidden",
      lctdropdown : "",
      lctdropup:"hidden",
      mkdropdown : "",
      mkdropup:"hidden",
      pricedropdown : "",
      pricedropup:"hidden",
      conddropdown : "",
      conddropup:"hidden",
      
  
    }
  }

  catdropdown = () => {
    this.setState({
      catdropdown:"hidden",
      catdropup : "",
      
    })
  } 
  
  catdropup = () => {
    this.setState({
      catdropup:"hidden",
      catdropdown : "",
      
      
    })
  }

  lctdropdown = () => {
    this.setState({
      
      lctdropdown:"hidden",
      lctdropup : "",
      
    })
  } 
  
  lctdropup = () => {
    this.setState({
      
      lctdropup:"hidden",
      lctdropdown : "",
      
      
    })
  }

  mkdropdown = () => {
    this.setState({
      
      mkdropdown:"hidden",
      mkdropup : "",
      
    })
  } 
  
  mkdropup = () => {
    this.setState({
      
      mkdropup:"hidden",
      mkdropdown : "",
      
      
    })
  }

  conddropdown = () => {
    this.setState({
      
      conddropdown:"hidden",
      conddropup : "",
      
    })
  } 
  
  conddropup = () => {
    this.setState({
      
      conddropup:"hidden",
      conddropdown : "",
      
      
    })
  }

  pricedropdown = () => {
    this.setState({
      
      pricedropdown:"hidden",
      pricedropup : "",
      
    })
  } 
  
  pricedropup = () => {
    this.setState({
      
      pricedropup:"hidden",
      pricedropdown : "",
      
      
    })
  }

  

  render() {
    var classs;
    var category = []
    var locate = []
    var make = []
    if (this.props.sign === "/mobilephones") {
      category = [{ ctg: "Accessories", icon: <HeadsetIcon /> }, { ctg: "Tablets", icon: <TabletIcon /> }, { ctg: "Mobile Phones", icon: <SmartphoneIcon /> }];
      locate = [{ lct: "Sindh" }, { lct: "Punjab" }, { lct: "Balochistan" }, { lct: "Khyber PakhtunKhwa" }, { lct: "Azad Kashimr" }, { lct: "Islamabad Capital Territory" }, { lct: "Northern Areas" }];
      make = [{ mk: "Apple", icon: <SmartphoneIcon /> }, { mk: "Samsung", icon: <SmartphoneIcon /> }, { mk: "Oppo", icon: <SmartphoneIcon /> }, { mk: "Vivo", icon: <SmartphoneIcon /> }, { mk: "Motorolla", icon: <SmartphoneIcon /> }, { mk: "Nokia", icon: <SmartphoneIcon /> }, { mk: "LG", icon: <SmartphoneIcon /> }, { mk: "Q Mobile", icon: <SmartphoneIcon /> }, { mk: "Infinix", icon: <SmartphoneIcon /> }, { mk: "Blackberry", icon: <SmartphoneIcon /> }];
      classs = ""
    }
    if (this.props.sign === "/cars") {
      category = [{ ctg: "Cars", icon: <DriveEtaIcon /> }, { ctg: "Cars on Installments", icon: <DriveEtaIcon /> }, { ctg: "Cars Accessories", icon: <DriveEtaIcon /> }, { ctg: "Spare Parts", icon: <DriveEtaIcon /> }, { ctg: "Buses,Vans & Trucks", icon: <DriveEtaIcon /> }, { ctg: "Rickshaw & Chingchi", icon: <DirectionsBikeIcon /> }, { ctg: "Other Vehicles", icon: <MotorcycleIcon /> }, { ctg: "Boats", icon: <DirectionsBoatIcon /> }, { ctg: "Tractors & Trailors", icon: <LocalShippingIcon /> }];
      locate = [{ lct: "Sindh" }, { lct: "Punjab" }, { lct: "Balochistan" }, { lct: "Khyber PakhtunKhwa" }, { lct: "Azad Kashimr" }, { lct: "Islamabad Capital Territory" }, { lct: "Northern Areas" }];
      make = [{ mk: "Suzuki", icon: <CommuteIcon /> }, { mk: "Toyota", icon: <CommuteIcon /> }, { mk: "Honda", icon: <CommuteIcon /> }, { mk: "Daihatsu", icon: <CommuteIcon /> }, { mk: "Nissan", icon: <CommuteIcon /> }, { mk: "Mitsubishi", icon: <CommuteIcon /> }, { mk: "Hyundai", icon: <CommuteIcon /> }, { mk: "Mercedes", icon: <CommuteIcon /> }, { mk: "Other Brands", icon: <CommuteIcon /> }, { mk: "Daewoo", icon: <CommuteIcon /> }];
      classs = ""
    }
    if (this.props.sign === "/motorcycles") {
      category = [{ ctg: "Motorcycles", icon: <MotorcycleIcon /> }, { ctg: "Spare Parts", icon: <MotorcycleIcon /> }, { ctg: "Bicycles", icon: <DirectionsBikeIcon /> }, { ctg: "ATV & Quads", icon: <MotorcycleIcon /> }, { ctg: "Scooters", icon: <MotorcycleIcon /> }];
      locate = [{ lct: "Sindh" }, { lct: "Punjab" }, { lct: "Balochistan" }, { lct: "Khyber PakhtunKhwa" }, { lct: "Azad Kashimr" }, { lct: "Islamabad Capital Territory" }, { lct: "Northern Areas" }];
      make = [{ mk: "Suzuki", icon: <MotorcycleIcon /> }, { mk: "Unique", icon: <MotorcycleIcon /> }, { mk: "Honda", icon: <MotorcycleIcon /> }, { mk: "United", icon: <MotorcycleIcon /> }, { mk: "Yamaha", icon: <MotorcycleIcon /> }, { mk: "Other Brands", icon: <MotorcycleIcon /> }, { mk: "Super Power", icon: <MotorcycleIcon /> }, { mk: "Road Prince", icon: <MotorcycleIcon /> }, { mk: "Metro", icon: <MotorcycleIcon /> }, { mk: "Super Star", icon: <MotorcycleIcon /> }];
      classs = ""
    }
    if (this.props.sign === "/houses") {
      category = [{ ctg: "Land & Plots", icon: <HouseIcon /> }, { ctg: "Houses", icon: <HouseIcon /> }, { ctg: "Appartment & Flats", icon: <HouseIcon /> }, { ctg: "Shops-Offices-Commercial Space", icon: <HouseIcon /> }, { ctg: "Portions & Floors", icon: <HouseIcon /> }];
      locate = [{ lct: "Sindh" }, { lct: "Punjab" }, { lct: "Balochistan" }, { lct: "Khyber PakhtunKhwa" }, { lct: "Azad Kashimr" }, { lct: "Islamabad Capital Territory" }, { lct: "Northern Areas" }];
      classs = "hidden"
    }
    if (this.props.sign === "/TVaudiovideos") {
      category = [{ ctg: "Computer & Accessories", icon: <AppsIcon /> }, { ctg: "TV-Video-Audio", icon: <AppsIcon /> }, { ctg: "Cameras & Accessories", icon: <AppsIcon /> }, { ctg: "Games & Entertainment", icon: <AppsIcon /> }, { ctg: "Other Home Appliances", icon: <AppsIcon /> }, { ctg: "Generator,UPS & Power Solutions", icon: <AppsIcon /> }, { ctg: "Kitchen Appliances", icon: <AppsIcon /> }, { ctg: "AC & Coolers", icon: <AppsIcon /> }, { ctg: "Fridges & Freezers", icon: <AppsIcon /> }, { ctg: "Washing Machines & Dryers", icon: <AppsIcon /> }];
      locate = [{ lct: "Sindh" }, { lct: "Punjab" }, { lct: "Balochistan" }, { lct: "Khyber PakhtunKhwa" }, { lct: "Azad Kashimr" }, { lct: "Islamabad Capital Territory" }, { lct: "Northern Areas" }];
      classs = "hidden"
    }
    if (this.props.sign === "/landandplots") {
      category = [{ ctg: "Land & Plots", icon: <HouseIcon /> }, { ctg: "Houses", icon: <HouseIcon /> }, { ctg: "Appartment & Flats", icon: <HouseIcon /> }, { ctg: "Shops-Offices-Commercial Space", icon: <HouseIcon /> }, { ctg: "Portions & Floors", icon: <HouseIcon /> }];
      locate = [{ lct: "Sindh" }, { lct: "Punjab" }, { lct: "Balochistan" }, { lct: "Khyber PakhtunKhwa" }, { lct: "Azad Kashimr" }, { lct: "Islamabad Capital Territory" }, { lct: "Northern Areas" }];
      classs = "hidden"
    }


    return (
<div>
<Navbar expand="lg">

      <Navbar.Toggle aria-controls="basic-navbar-nav" ><ArrowDropDownCircleIcon /></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
      <List className="root">
        <ListItem>
          <ListItemText primary="CATEGORIES" />
          <button className={this.state.catdropdown} style={{borderStyle:"none",backgroundColor:"transparent"}} onClick={this.catdropdown}> <ArrowDropUpIcon /> </button>
          <button className={this.state.catdropup} style={{borderStyle:"none",backgroundColor:"transparent"}} onClick={this.catdropup}><ArrowDropDownIcon />  </button>

        </ListItem>
        <div className={this.state.catdropdown}>
        <ListItem>
          <ListItemText secondary="All Categories" />
        </ListItem>
        <Divider component="li" style={{ width: "50%" }} />
        <li>
          <Typography
            className="dividerFullWidth"
            color="textSecondary"
            display="block"
            variant="caption"
          >

          </Typography>


        </li>

        {
          category.map((v, i) => {
            return <div key={i}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    {v.icon}
                  </Avatar>
                </ListItemAvatar>
            <ListItemText primary={v.ctg} secondary="6364" />
              </ListItem>
            </div>
          })
        }
        </div>
        <ListItem>
          <ListItemText primary="LOCATION" />
          <button className={this.state.lctdropdown} style={{borderStyle:"none",backgroundColor:"transparent"}} onClick={this.lctdropdown}> <ArrowDropUpIcon /> </button>
          <button className={this.state.lctdropup} style={{borderStyle:"none",backgroundColor:"transparent"}} onClick={this.lctdropup}><ArrowDropDownIcon />  </button>

        </ListItem>
        <div className={this.state.lctdropdown}>
        <ListItem>
          <ListItemText secondary="PAKISTAN" />
        </ListItem>
        <Divider component="li" style={{ width: "50%" }} />
        <li>
          <Typography
            className="dividerFullWidth"
            color="textSecondary"
            display="block"
            variant="caption"
          >

          </Typography>


        </li>

        {
          locate.map((v, i) => {
            return <div key={i}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocationCityIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={v.lct} secondary="6364" />
              </ListItem>
            </div>
          })
        }
        </div>
        <div className={classs}>
          <ListItem>
            <ListItemText primary="MAKE" />
            <button className={this.state.mkdropdown} style={{borderStyle:"none",backgroundColor:"transparent"}} onClick={this.mkdropdown}> <ArrowDropUpIcon /> </button>
          <button className={this.state.mkdropup} style={{borderStyle:"none",backgroundColor:"transparent"}} onClick={this.mkdropup}><ArrowDropDownIcon />  </button>

          </ListItem>
          <Divider component="li" style={{ width: "50%" }} />
        </div>
        <li>
          <Typography
            className="dividerFullWidth"
            color="textSecondary"
            display="block"
            variant="caption"
          >

          </Typography>


        </li>
        <div className={this.state.mkdropdown}>
        {
          make.map((v, i) => {
            return <div key={i}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    {v.icon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={v.mk} secondary="6364" />
              </ListItem>
            </div>
          })
        }
        </div>

        <ListItem>
          <ListItemText primary="PRICE" />
          <button className={this.state.pricedropdown} style={{borderStyle:"none",backgroundColor:"transparent"}} onClick={this.pricedropdown}> <ArrowDropUpIcon /> </button>
          <button className={this.state.pricedropup} style={{borderStyle:"none",backgroundColor:"transparent"}} onClick={this.pricedropup}><ArrowDropDownIcon />  </button>

        </ListItem>
        <Divider component="li" style={{ width: "50%" }} />
        <li>
          <Typography
            className="dividerFullWidth"
            color="textSecondary"
            display="block"
            variant="caption"
          >

          </Typography>

        </li>
        <div className={this.state.pricedropdown}>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <input className="priceinp" placeholder="Min" style={{ margin: "5px", backgroundColor: "lightgray", width: "30%", height: "50px" }} />
          <input className="priceinp" placeholder="Max" style={{ margin: "5px", backgroundColor: "lightgray", width: "30%", height: "50px" }} />
          <button style={{ width: "50px", height: "45px" }} ><ArrowForwardIosIcon /></button>
        </div>
        </div>

        <ListItem>
          <ListItemText primary="CONDITION" />
          <button className={this.state.conddropdown} style={{borderStyle:"none",backgroundColor:"transparent"}} onClick={this.conddropdown}> <ArrowDropUpIcon /> </button>
          <button className={this.state.conddropup} style={{borderStyle:"none",backgroundColor:"transparent"}} onClick={this.conddropup}><ArrowDropDownIcon />  </button>

        </ListItem>
        <Divider component="li" style={{ width: "50%" }} />
        <li>
          <Typography
            className="dividerFullWidth"
            color="textSecondary"
            display="block"
            variant="caption"
          >

          </Typography>


        </li>
        <div className={this.state.conddropdown}>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>

          <input type="checkbox" style={{ margin: "6px", width: "20px", height: "20px" }} /> <h6 style={{ display: "inline-block" }}> Used </h6>

          <br />

          <input type="checkbox" style={{ margin: "6px", width: "20px", height: "20px" }} /> <h6 style={{ display: "inline-block" }}> New </h6>

        </div>
        </div>
      </List>
        </Navbar.Collapse>
        </Navbar>
</div>
    );
  }

}

export default SubheaderDividers;