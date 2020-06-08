import React, {Component} from 'react';
import banner from '../img/rectangle-copy-25.jpg';

class Banner extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Banner">
                <img src={banner} alt="" />
            </div>
        );
    }
}

export default Banner;