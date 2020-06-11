import React from 'react';
import { Link } from 'react-router-dom';
import './test.css'

export default class Test extends React.Component {
    render() {
        return (
            <div className='woof-container'>
                 <p className='woof'>woof woof...</p>
                <Link to='/'><button className='back-landing'>Landing page</button></Link>
            </div>
        )
    }
}