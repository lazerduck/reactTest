import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            name: "",
            username: "",
            email: ""
        };

        this.Save = this.Save.bind(this);
    }

    UpdateName(event) {
        this.setState({
            name: event.target.value
        });
    }

    UpdateUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    UpdateEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    Save() {
        let user = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email
        };

        let arr = JSON.parse(JSON.stringify(this.state.users));
        arr.push(user);

        this.setState({
            users: arr,
            name: "",
            username: "",
            email: ""
        });
    }

    render() {
        return (
            <div>
                <p>Enter User details:</p>
                <div>
                    <label>Name</label>
                    <input type="Text" value={this.state.name} onChange={event => this.UpdateName(event)} />
                </div>
                 <div>
                    <label>Username</label>
                    <input type="Text" value={this.state.username} onChange={event => this.UpdateUsername(event)} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="Text" value={this.state.email} onChange={event => this.UpdateEmail(event)} />
                </div>
                <label>User count: {this.state.users.length}</label>
                <button onClick={this.Save}>Save</button>
            </div>
        );
    }
}

export default connect()(AddUser);
