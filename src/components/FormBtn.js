import React, {Component} from 'react';

class FormBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form__row form__btn">
                <button type="submit" className="btn">{this.props.text}</button>
            </div>
        );
    }
}

export default FormBtn;