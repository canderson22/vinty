import React, { Component } from 'react';
import axios from 'axios';


class UserDisplay extends Component {
    state = {
        fields: {
            title: '',
            category: '',
            content: ''
        }
    }

    onFormSubmit = this.onFormSubmit.bind(this)
    onInputChange = this.onInputChange.bind(this)
    
    onFormSubmit(e) {
        e.preventDefault()
        var data = {
            ...this.state.fields,
            user: this.props.user._id
        }
        axios({
            method:'post',
            url: '/api/media',
            data: data
        })
        .then(res => {
            alert('ok')
        })
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

    componentDidMount() {
        // axios({method: 'get', url: '/api/media'})
        // .then(res => {
        //     this.setState({usuarios: res.data.filter(user => user.admin === false)})
        //     // console.log(res.data)
        // })
      }

    render() {
        const { title, category, content } = this.state.fields
        console.log(this.props.user)
        return (
            <div className="userDispaly">
                {
                    this.props.user
                    ? (
                        <div>
                            <h2 className='text-center'>{this.props.user.name}</h2>
                            {
                                this.props.user.media.map(media => {
                                    return <h3>{media.title}</h3>
                                })
                            }
                            <div>
                                <form className='container' onSubmit={this.onFormSubmit} onChange={this.onInputChange}>
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" name="title" value={title} id="" placeholder="Title"/>
                                        </div>
                                        <div className="col">
                                            <input type="text" name="category" value={category} id="" placeholder="Category"/>
                                        </div>
                                        <div className="col">
                                            <input type="text" name="content" value={content} id="" placeholder="Content"/>
                                        </div>
                                        <div className="col">
                                            <button>Add</button>
                                        </div>
                                    </div>
                                </form>
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