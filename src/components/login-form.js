import React from 'react';
import SubmitButton from './submit-button'; //imported SubmitButton component

export default class LoginForm extends React.Component {
    render() { //includes h3 for Log In
        return (
            <div className="card">
                <div className="card-body">
            
            <form className="row g-3 form-center">
                
                <div>
                    <h3>Log In</h3> 
                </div>
            
                <div className="col-sm-8">
                    <label for="username" className="form-label">Username</label>
                    <input type="username" className="form-control" id="username" aria-describedby="usernameHelp" />            
                </div>
                
                <div className="col-sm-8">
                    <label for="InputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="InputPassword" />
                </div>
            
                <div>
                <SubmitButton />
                </div>                    
            </form>
                </div>
            </div> // closing card div; closes entire body
            
        );
    }
}