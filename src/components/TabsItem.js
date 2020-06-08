import React from "react";
import Dropdown from "./Dropdown";
import Icon from "./Icon";
import "react-slidedown/lib/slidedown.css";

class TabsItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = () => {
            this.setState(state => ({open: !state.open}));
        };
        this.state = {
            open: false,
        };
    }


    render() {
        return (
            <div className={this.state.open ? "Tabs__item active" : "Tabs__item"}>
                <div
                    className="Tabs__title TabsTitle"
                    onClick={this.handleToggle}
                >
                    <div className="TabsTitle__text">{this.props.itemTitle}</div>
                    <Icon symbol="arrow"/>
                </div>
                <Dropdown
                    open={this.state.open}
                    itemContent={this.props.children}
                />
            </div>
        );
    }
}

export default TabsItem;
