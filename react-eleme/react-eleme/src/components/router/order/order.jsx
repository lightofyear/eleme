import React, {Component} from 'react';
import Head from '../../header/index';
import Footer from '../../indexfootnav/index';
import './order.scss'

export default class Order extends Component {
    render() {
        return (
            <div className={'order'}>
                <Head title={'订单'}/>
                <div className={'wrap'}>
                    <div className={'content'}>
                        <img src={require('../../../static/img/order/70008646170d1f654e926a2aaa3afpng.png')} alt=""/>
                        <p>登录后查看外卖订单</p>
                        <button>立即登录</button>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}
