import React from 'react';
import img from '../img/city.png';



class Cookie extends React.Component {
 
   
    render(){
        return(
            <div className="cookie">
                <img onClick={() => this.props.onUpdateCookies(1)} src={img}/>
                <p id="cookieNumber">{this.props.getCount.toFixed(2)} building</p>
                <p id="cookieNumberPerSec">{this.props.getCookiesPerSec.toFixed(2)}  construction /sec</p>
            </div>
        
        
        );
    }
}

export default Cookie;
