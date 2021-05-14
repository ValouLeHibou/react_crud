import React from 'react'
import axios from 'axios';


export default class Users extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/users`)
            .then(res => {
                const users = res.data;
                this.setState({users});
            })
    }

    render() {
        return (
            // Avec slice, je ne retourne que les 3 premiers items
            <div className="container">
                <h1>Users</h1>
                <div className="articleSection row">
                    {this.state.users.map(user =>
                        <div className="oneArticle col s12">
                            <h3>{user.firstname} {user.lastname}</h3>
                            <img src={user.image}></img>
                            <div>{user.role}</div>
                            <div>{user.email}</div>
                            <div className="row">{user.creation_date}</div>
                        </div>)}
                </div>
            </div>
        )
    }
}