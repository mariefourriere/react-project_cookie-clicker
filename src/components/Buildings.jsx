import React from 'react';

class Buildings extends React.Component{
    state = {
        price: 15,
        numberofBuildings: 0,
        cookiesPerSec: 0.2,
    }

    handleClick =() => {
       if(this.props.getCount >= this.state.price){
        this.props.onUpdateCookies(-this.state.price)
        
        this.props.onUpdatePerSec(this.cookiesPerSec);
        
        let price = this.state.price;
        price = Math.floor(price *1.1);
        
        let numberofBuildings = this.state.numberofBuildings;
        numberofBuildings++; 
        
        this.setState({price, numberofBuildings, cookiesPerSec})
       }
        
    }
    render(){
        return(
            <div id="building">
            <div>
                <h3>Building A</h3>
                <p>Price = {this.state.price}</p>
                <p>you have {this.state.numberofBuildings} buildings</p>
                <button onClick={this.handleClick}>BUY</button>

            </div>
            <div>
                {/* <h3>Building B</h3>
                <p>Price = {this.state.price}</p>
                <button onClick={this.handleClick}>BUY</button> */}

            </div>
                
                

                
            </div>
        )
    }
}

export default Buildings;