import React from 'react'
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
                        <div className="column column-80">
                            <div className="container">
                                {
                                    this.state.media.length > 0
                                    ? (
                                        <h1>media</h1>
                                    )
                                    : (
                                        <h2 className="h2">No media has been upload</h2>
                                    )
                                }
                            </div>
                        </div>
                        <aside className='column'>
                            <h4>Ready to send your media</h4>
                        </aside>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard