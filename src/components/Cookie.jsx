import React from 'react';
import img from '../img/cookie.png';



class Cookie extends React.Component {
 
   
    render(){
        return(
            <div className="cookie">
                <img onClick={() => this.props.onUpdateCookies(1)} src={img}/>
                <p id="cookieNumber">{this.props.getCount.toFixed(2)} cookies</p>
                <p id="cookieNumberPerSec">{this.props.getCookiesPerSec.toFixed(2)}  cookies /sec</p>
            </div>
        
        
        );
    }
}

export default Cookie;
