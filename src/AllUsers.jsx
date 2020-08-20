import React, { Component } from 'react';
import User from './User';
import AddUserForm from './AddUserForm';

class AllUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { name: "Kwakue", gen: 12, email: "kwaku@email.com" },
                { name: "Ama", gen: 1, email: "ama@email.com" },
                { name: "Kofo", gen: 10, email: "kofo@email.com" },
            ]
        }
    }
    handleAddUser = (item) => {
        console.log(item);
        this.setState({
            ...this.state, users: [...this.state.users, item]
        })
    }
    render() {
        return (
            <div>
                <AddUserForm addUser={this.handleAddUser} />
                <div>
                    {
                        this.state.users.map((user, index) => {
                            return <User key={index} name={user.name} gen={user.gen} email={user.email} />
                        })
                    }</div>
            </div>
        );
    }
}

export default AllUsers;
