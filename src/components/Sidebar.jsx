import React from 'react';

class Sidebar extends React.Component{

    render(){
        return(
            <div id="sidebar">
                {this.props.children}
            </div>
        )
    }
}

export default Sidebar