import React from 'react';
import {Link} from "react-router-dom";

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let button;
        if (!this.props.submit) {
            button = <Link to={this.props.path ? this.props.path : '/'} className={'btn ' + this.props.class}>
                <span>{this.props.text}</span>
            </Link>
        } else {
            button = <button type="submit" className={'btn ' + this.props.class}>
                <span>{this.props.text}</span>
            </button>
        }
        return (
            <div>{button}</div>
        );
    }
}

export default Button;