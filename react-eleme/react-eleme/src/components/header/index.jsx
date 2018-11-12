import React, {Component} from 'react';
import './index.scss'
class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title || '美食',
        }
    }
    render() {
        return (
            <div className={'head'}>
                <div className={'back iconfont icon-arrow1'}></div>
                <div className={'title'}>{this.state.title}</div>
            </div>
        );
    }
}

export default Header;