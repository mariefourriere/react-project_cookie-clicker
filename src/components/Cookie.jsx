import React from 'react';
import img from '../img/cookie.png';



class Cookie extends React.Component {
 
   
    render(){
        return(
            <div className="cookie">
                <img onClick={() => this.props.onUpdateCookies(1)} src={img}/>
                <p id="total">{this.props.getCount}</p>
                <p>{this.props.getCookiesPerSec} cookies /sec</p>
            </div>
        
        
        );
    }
}

export default Cookie;
