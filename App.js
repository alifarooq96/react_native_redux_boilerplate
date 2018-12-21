import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/store'; //Import the store
import Home from './app/components/home' //Import the component file
import Form from './app/components/form'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Form />
                <Home />
            </Provider>
        );
    }
}