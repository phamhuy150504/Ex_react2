import React, { Component } from 'react'
import Modal from './Modal'
import index from '../index.css'
export default class Ex2_Galasses extends Component {
    render() {
        return (
            <div style={{backgroundImage: 'url(./glassesImage/background.jpg)'}}>
                <div className='ex_glasses'>
                    <header style={{ width: '100%', height: '80px', background: 'black' }}>
                        <div className="text-center"style={{color: '#800080'}} >
                            <h2 className='py-3'>TRY GLASSES APP ONLINE</h2>
                        </div>
                    </header>
                    <div>
                        <div className="container">
                            <Modal />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
