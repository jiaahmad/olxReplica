import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from '../pages/home';
import Mobilephones from '../pages/mobilephones'
import Cars from '../pages/cars'
import Motorcycles from '../pages/motorcycles'
import Houses from '../pages/houses'
import TVAudioVideo from '../pages/tvaudiovideo'
import Landandplots from '../pages/landandplots'
import  Dialog  from '../component/dialog';
import  Sellform  from '../component/sellform';
import Sellmobileform from '../component/sellmobileform';
import Sellhouseform from '../component/sellhouseform';
import Sellcarform from '../component/sellcarform';
import Sellplotform from '../component/sellplotform';
import Sellmotorcycleform from '../component/sellmotorcycleform';
import Selltvaudioform from '../component/selltvaudioform';
import Signup from '../component/signup';
import Myadds from '../component/myadds'
import Addetails from '../component/addetail'
class AppRouter extends React.Component{
    render(){

        return(
            <Router>
                <Route exact path="/" component={Home}></Route>
                <Route path="/login" component={Dialog}></Route>
                <Route path="/sell" component={Sellform}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/mobile" component={Sellmobileform}></Route>
                <Route path="/house" component={Sellhouseform}></Route>
                <Route path="/car" component={Sellcarform}></Route>
                <Route path="/tvaudiovideo" component={Selltvaudioform}></Route>
                <Route path="/motorcycle" component={Sellmotorcycleform}></Route>
                <Route path="/landandplot" component={Sellplotform}></Route>
                <Route path="/Mobilephones" component={Mobilephones}></Route>
                <Route path="/Cars" component={Cars}></Route>
                <Route path="/Motorcycles" component={Motorcycles}></Route>
                <Route path="/Houses" component={Houses}></Route>
                <Route path="/TVaudiovideos" component={TVAudioVideo}></Route>
                <Route path="/Landandplots" component={Landandplots}></Route>
                <Route path="/myadds" component={Myadds}></Route>
                <Route path="/addetails/:id" component={Addetails}></Route>
                 
            </Router>
        )
    }
}

export default AppRouter;