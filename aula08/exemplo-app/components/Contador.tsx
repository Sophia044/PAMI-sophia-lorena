import React from 'react';

export default class contador extends React.Component {
    constructor (){
        super();
        this.state = {
            contador: 0,
        };
    }
    Decrementar () {
        this.setState ({
            contador: this.state.contador -1
        });
    }
    Incrementar () {
        this.setState ({
            contador: this.state.contador +1
        });
    }
    render () {
        
    }
}