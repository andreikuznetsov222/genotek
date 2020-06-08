import React from "react";
import {SlideDown} from "react-slidedown";

export default class Dropdown extends React.Component {
    render() {
        let className = "dropdown-slidedown";
        let render = this.props.open;
        let closed = false;
        let content = this.props.itemContent;

        return (
            <div>
                <SlideDown
                    className={"pure-menu pure-menu-scrollable " + className}
                    closed={closed}
                >
                    {render &&  content }
                </SlideDown>
            </div>
        );
    }
}