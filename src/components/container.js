import React from 'react';
import SubmitButton from './submit-button';

export default class Container {
    render() {
        return <div className="container">
            <SubmitButton />
            <SubmitButton />
            <SubmitButton />
            <SubmitButton />
            <SubmitButton />
            <SubmitButton />
            <SubmitButton />
        </div>
    }
}
/*The container component will be the main component of the React app
The navbar, form, and submit-button components will be added to this page, 
and index.js will call the container component in the 'root' */ 

