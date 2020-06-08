import React, {Component} from 'react';
import Icon from "./Icon";

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.handleClear = () => {
            this.setState({inputVal: ''});
        };
        this.state = {
            inputVal: '',
        };

    }

    render() {
        let clear;
        if (this.state.inputVal) {
            clear = <div className="clear" onClick={this.handleClear}>
                           <Icon symbol="clear"/>
                    </div>
        }

        return (
            <div className="form__row">
                <input type={this.props.type ? this.props.type : "text"}
                       placeholder={this.props.placeholder}
                       className="form__input" id={this.props.id}
                       value={this.state.inputVal}
                       onChange={e => this.setState({ inputVal: e.target.value })}

                />
                <span/>
                {clear}
            </div>
        );
    }
}

export default FormInput;