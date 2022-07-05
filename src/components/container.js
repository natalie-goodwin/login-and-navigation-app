import React from 'react';
import SubmitButton from './submit-button';
import NavBar from './navbar'; //imported NavBar component
import LoginForm from './login-form'; //imported LoginForm component


export default class Container extends React.Component {
    render() {
        return (              
        <div className="container-fluid">        
            <div>
                <NavBar /> 
            </div>               
            <div className="login">
                <LoginForm /> 
            </div> 
        </div> //closing div          
        );
    } //closing render braces
} //closing export braces
/*The container component will be the main component of the React app
The navbar and login form components will be added to this page, 
and index.js will call the container component in the 'root' */ 

