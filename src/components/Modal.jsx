import React, { Component } from 'react'
import dataGlasses from '../data/glasses.json'
export default class Modal extends Component {
    state = {
        glasses: {},
        class: '',
    }
    renderGlasses = () => {

        return dataGlasses.map((item, index) => {
            return (
                <a onClick={() => this.handleGlasses(item)} key={index} className='col-4 p-2' style={{ cursor: 'pointer' }} >
                    <img src={item.url} alt="" style={{ width: '185px', height: '65px' }} />
                </a>
            )
        })
    }

    handleGlasses = (glasses) => {
        this.setState({
            glasses: glasses,
            class: 'info_glasses'
        })
    }

    render() {

        let { glasses } = this.state
        return (
            <div className='container'>
                <div className="row">
                    <div className='col-6 position-relative'>
                        <img src="./glassesImage/model.jpg" alt="1" style={{ height: '400px', padding: '40px 100px', zIndex: 5 }} />
                       <div>
                            <img className='change_glasses' src={glasses.url} alt="" />
                            <div className={this.state.class}>
                                <div className='text-left pl-3 text-white'>
                                    <h2>{glasses.name}</h2>
                                    <p>{glasses.price}</p>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className='col-6'>
                        <img src="./glassesImage/model.jpg" alt="1" style={{ height: '400px', padding: '40px 100px', zIndex: 5 }} />
                    </div>
                </div>
                <div className="row glasses">
                    {this.renderGlasses()}
                </div>
            </div>
        )
    }
}
