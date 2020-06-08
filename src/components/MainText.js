import React, {Component} from 'react';

class MainText extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="MainText">
                <div className="MainText__title">
                    {this.props.title}
                </div>
                <div className="MainText__subtitle">
                    {this.props.subtitle}
                </div>
            </div>
        );
    }
}

export default MainText;