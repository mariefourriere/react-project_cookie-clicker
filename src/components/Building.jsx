import React from 'react';



class Building extends React.Component{
    
    render(){
               return(
                    <div className="buildings" id="{'building' + this.props.details.id}">
                    <h3>{this.props.details.name}</h3>
                    <p>Price = {this.props.details.price} €</p>
                    <p>You have {this.props.details.numberofBuildings} {this.props.details.name}</p>
                    <button onClick={() => this.props.onUpdateBuilding(this.props.details.id)}>Buy</button>
                </div>
                )
            }
}

export default Building;