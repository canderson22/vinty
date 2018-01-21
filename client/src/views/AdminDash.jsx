import React from 'react';
import axios from 'axios';
import splitArray from 'split-array'

class AdminDash extends React.Component {
    state = {
		usuarios: [],
    }
    
    componentDidMount() {
        axios({method: 'get', url: '/api/users'})
        .then(res => {
            this.setState({usuarios: res.data.filter(user => user.admin === false)})
            // console.log(res.data)
        })
      }

    render() {
        var userRow = splitArray(this.state.usuarios, 1)
		console.log(userRow)
        return (
            <div className="adminDash">
                <h1>Admin Page</h1>
                <div className="container" style={{"margin-left": "0px"}}>
                    <div className="row">
                        <div className="col-md-3">
                        <h3>Users</h3>
                        { 	userRow 
                            ? (
                                userRow.map((row, i) => {
                                    return (
                                        <div className='row' key={i}>
                                            {
                                                row.map(user => {
                                                    return (
                                                        <div className='column' key={user._id}>
                                                            <strong>Title: {user.name}</strong>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                            })
                            )
                            : null
                        }
                        </div>
                        <div className="col-md-9">
                        <h3>Stuff</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminDash