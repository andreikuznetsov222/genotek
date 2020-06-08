import React from 'react';
import icons from "../img/icons/icons.svg";

class Icon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <svg className="icon-svg">
                <use xlinkHref={icons + '#' + this.props.symbol}/>
            </svg>
        );
    }
}

export default Icon;