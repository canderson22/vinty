import React from 'react'
import { Link } from 'react-router-dom'
import clientAuth from '../clientAuth'

class Dashboard extends React.Component {
    state = {
        media: []
    }

    componentDidMount() {
        this.setState({ media: clientAuth.getMedia() })
    }

    render() {
        return (
            <div className='Dashboard'>
                <h1>Vinty Dashboard</h1>
                <div className="container-fluid dash">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="container">
                                {
                                    this.state.media.length > 0
                                    ? (
                                        <h1>media</h1>
                                    )
                                    : (
                                        <h2 className="h2">No media has been uploaded</h2>
                                    )
                                }
                            </div>
                        </div>
                        <aside className='col-md-3'>
                          <div className='container'>
                            <h4 className='text-center'>Ready to send your media</h4>
                            <Link to='/convert' className='btn btn-block btn-dark'>Vinty</Link>
                          </div>
                        </aside>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard