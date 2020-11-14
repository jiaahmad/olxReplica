import React from 'react';
import Sellformheader from '../sub-components/sellformheader'
import Formcategory from '../sub-components/formcategories'
class Sellform extends React.Component{
    
    render(){
        return(
            <div>
                <Sellformheader />

                <Formcategory />
            </div>
        )
    }
}



export default Sellform;