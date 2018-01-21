import React, { Component } from 'react'
import clientAuth from '../clientAuth'

class ConvertForm extends Component {

    state = {
        fields: {
            dvds: 0,
            cds: 0,
            videoGames: 0,
            vhs: 0,
            casettes: 0,
            vinyl: 0
        }
    }

    onFormSubmit = this.onFormSubmit.bind(this)
    onInputChange = this.onInputChange.bind(this)

    onFormSubmit(e) {
        e.preventDefault()

    }

    onInputChange(e) {
        console.log({[e.target.name]: e.target.value})
        this.setState({
            fields: {
                ...this.state.fields,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        const { dvds, cds, videoGames, vhs, casettes, vinyl } = this.state.fields
        return (
            <div className='ConvertForm'>
                <h3 className='text-center'>Fill out the from and send us your stuff!</h3>
                <h5 className='text-center'>It's that easy!!!</h5>
                <form className='container' onSubmit={this.onFormSubmit} onChange={this.onInputChange}>
                    <div className="row">
                        <div className="col form-group">
                            <label>Dvds</label>
                            <input className='form-control' type="number" value={dvds} name="dvds" />
                        </div>
                        <div className="col form-group">
                            <label htmlFor="">Cds</label>
                            <input type="number" className='form-control'value={cds} name="cds"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-group">
                            <label>Video Games</label>
                            <input className='form-control' type="number" value={videoGames} name="videoGames"/>
                        </div>
                        <div className="col form-group">
                            <label htmlFor="">VHS</label>
                            <input type="number" className='form-control'value={vhs} name="vhs" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-group">
                            <label>Casettes</label>
                            <input className='form-control' type="number" value={casettes} name="casettes"/>
                        </div>
                        <div className="col form-group">
                            <label htmlFor="">Vinyl</label>
                            <input type="number" className='form-control' value={vinyl} name="vinyl"/>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button>Ready</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ConvertForm