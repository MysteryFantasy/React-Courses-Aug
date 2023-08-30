import React, { Component } from 'react';

class Button extends Component {
    render() {
        const {buttonAction, buttonText} = this.props;
        return (
            <button onClick={buttonAction}>{buttonText}</button>
        )
    }
}

export default Button;