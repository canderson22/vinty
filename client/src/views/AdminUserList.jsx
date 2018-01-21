import React, { Component } from 'react'

class UserDisplay extends Component {
    render() {
        console.log(this.props.user)
        return (
            <div className="userDispaly">
                {
                    this.props.user
                    ? (
                        <div>
                            <h2 className='text-center'>{this.props.user.name}</h2>
                            <div className='container'>
                                <form>

                                </form>
                                {
                                    this.props.user.media.map(media => {
                                        return <h3>{media.title}</h3>
                                    })
                                }
                            </div>
                        </div>
                    )
                    : null
                }
            </div>
        )
    }
}

export default UserDisplay