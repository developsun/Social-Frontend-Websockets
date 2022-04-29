import React, {Component } from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './chat.css';
export class Login extends Component{
  

    state = {
        credentials: {email: '', password: ''}
      }
      
    
      login = event => {
        fetch('http://localhost:5000/api/auth', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(this.state.credentials)
        })
        .then( data => data.json())
        .then(
          data => {
            localStorage.setItem('x-auth-token',data.token);
            window.location.href="/chat"
          }

        )
        .catch( error => console.error(error))
      }
    
      inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
      }
      
    render(){
        return(
            <div className="container pl-5 mt-5 pr-5">
                <div className="row text-left pl-5 pr-5">
                  <div className="col-3"></div>
                   <div className="col-6">
                     <div className="login-form">
                            <center>
                              <img src="https://www.redappletech.com/wp-content/uploads/2018/12/Redapple_new_logo.png" alt="none"/>
                            </center>
                            <br/>
                            <label className="text-white">Email Address</label>
                            <br/>
                            <input type="text" className="login-text" name="email" value={this.state.credentials.email} onChange={this.inputChanged}/>
                            <br/><br/>
                            <label className="text-white">Password</label><br/>
                            <input type="password"  className="login-text" name="password" value={this.state.credentials.password} onChange={this.inputChanged} />
                            <br/><br/>
                            <button className="login-button" onClick={this.login}>Login</button>
                      </div>
                    </div>
                    <div className="col-3"></div>

                    

                </div>
                </div>
        )
    }
}