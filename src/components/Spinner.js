import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center" style={{margin: '100px 0px'}}>
                <img className="my-3" src={loading} alt="loading" />
            </div>
        )
    }
}

export default Spinner
