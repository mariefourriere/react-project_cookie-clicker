import React from 'react';
import ReactDOM from 'react-dom';

import Cookie from './components/Cookie';
import Sidebar from './components/Sidebar';
import Buildings from './components/Buildings';

class App extends React.Component {
  
  state = {
    cookies: 0,
    cookiesPerSec:0,
  }  

  incrementCookie = (x) => {
    let count = this.state.cookies;
    count = count + x;
    this.setState({cookies: count})
  }


 updateCookiesPerSec = (x) => {
    let cookiesPerSec = this.state.cookiesPerSec;
    cookiesPerSec += x;
    this.setState({ cookiesPerSec });
  }

  interval = setInterval(() => {
    this.incrementCookie(this.state.cookiesPerSec)
  }, 1000);
  
  render() {
    return(
        <>
            <h1>Welcome to the Cookie Clicker</h1>
            <main>
            <Sidebar> 
              <Buildings 
              onUpdateCookies={this.incrementCookie}
              getCount= {this.state.cookies}
              onUpdatePerSec = {this.updateCookiesPerSec} />

              
            </Sidebar>
            <Cookie onUpdateCookies={this.incrementCookie} 
            getCount= {this.state.cookies}
            getCookiesPerSec ={this.state.cookiesPerSec}/>
            </main>
            
        </>
    )
    } 
}

ReactDOM.render(<App />, document.querySelector('#root'));