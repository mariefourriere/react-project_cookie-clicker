import React from 'react';

import Building from './Building'

class Buildings extends React.Component{
    state = {
        buildings: [
            {
                id: 1,
                price: 15,
                name:'Appartment',
                numberofBuildings: 0,
                cookiesPerSec: 0.2,
            },
            {
                id: 2,
                price: 150,
                name:'House',
                numberofBuildings: 0,
                cookiesPerSec: 4,
            },
            {
                id: 3,
                price: 500,
                name:'Store',
                numberofBuildings: 0,
                cookiesPerSec: 10,
            },
            {
                id: 4,
                price: 1000,
                name:'Building',
                numberofBuildings: 0,
                cookiesPerSec: 20,
            },
            {
                id: 5,
                price: 2000,
                name:'Mall',
                numberofBuildings: 0,
                cookiesPerSec: 45,
            },
            
        ],
       
    }

    handleClick = id => {
        let buildings = [...this.state.buildings];
        const index = buildings.findIndex(building => building.id === id);

        
            if(this.props.getCount >= buildings[index].price){
            
                this.props.onUpdateCookies(-buildings[index].price)
                
                this.props.onUpdatePerSec(buildings[index].cookiesPerSec);
                
                
                buildings[index].price = Math.floor(buildings[index].price *1.1);
                
                              
                buildings[index].numberofBuildings++; 

                              
                this.setState({buildings})
            
        }
        
    }
    render(){
        return (
            <>
                {this.state.buildings.map(building => (
                    <Building
                    key={building.id}
                    details={building}
                    onUpdateBuilding = {this.handleClick}
                    />
                   
                ))}
           </>
        )
   
    }
}

export default Buildings;