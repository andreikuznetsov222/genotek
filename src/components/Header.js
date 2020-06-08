import React, {Component} from 'react';
import Icon from "./Icon";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Header">
                <div className="Header__logo"><a href="https://www.genotek.ru/" target="_blank">GENOTEK</a></div>
                <div className="Header__date">неделю назад</div>
                <div className="Header__user">
                    <a href=""><Icon symbol="user"/><span>доступно только мне</span></a>
                </div>
            </div>
        );
    }
}

export default Header;