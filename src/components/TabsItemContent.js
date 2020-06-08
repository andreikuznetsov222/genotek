import React from "react";
import "react-slidedown/lib/slidedown.css";

class TabsItemContent extends React.Component {
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
            <div className="Tabs__content TabsContent">
                <div className="TabsContent__inner">
                    <div className="TabsContent__row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default TabsItemContent;