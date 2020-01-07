import React, { Component } from 'react'

export class UserItem extends Component {
    

    constructor() {
        super();
        this.state = {
            id: '1',
            login: 'mojombo',
            photo: 'https://avatars0.githubusercontent.com/u/1?v=4',
            url: 'https://api.github.com/users/mojombo'
        }
    }
    
    render() {
        const {photo, url, login} = this.state;
        return (
            <div className="card text-center">
                <img src={photo} alt="Avatar" className="round-img" style={{ width: '60px'}}/>
                <h3>{login}</h3>
                <div>
                    <a href={url} className="btn btn-dark btn-sm my-1">More...</a>
                </div>
            </div>
        )
    }
}

export default UserItem
