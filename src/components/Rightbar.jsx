import React from 'react';

class Rightbar extends React.Component{

    render(){
        return(
            <div id="rightbar">
                {this.props.children}
            </div>
        )
    }
}

export default Rightbar