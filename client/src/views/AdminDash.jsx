import React from 'react';
import axios from 'axios';
import splitArray from 'split-array';
import UserDisplay from './AdminUserList'

class AdminDash extends React.Component {
    state = {
        usuarios: [],
        currentUser: null
    }

    viewUser = this.viewUser.bind(this)
    
    componentDidMount() {
        axios({method: 'get', url: '/api/users'})
        .then(res => {
            this.setState({usuarios: res.data.filter(user => user.admin === false)})
            // console.log(res.data)
        })
      }

      viewUser(e) {
        var user = JSON.parse(e.target.value)
        this.setState({currentUser: user})
      }

    render() {
        var userRow = splitArray(this.state.usuarios, 1)
        return (
            <div className="adminDash">
                <h1>Admin Page</h1>
                <div className="container" style={{"marginLeft": "0px"}}>
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
                                                            <button value={JSON.stringify(user)} onClick={this.viewUser} className='btn btn-dark'>{user.name}</button>
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
                        <h3>Users Vinty Library</h3>
                            <UserDisplay user={this.state.currentUser}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminDash