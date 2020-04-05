import React, { Component } from 'react';
import { getUsers, setUser } from '../actions/userAction';
import { connect } from 'react-redux';

class UserList extends Component {
    componentDidMount(){
        this.props.getUsers();
    }

    handleOnClick = userId => {
        this.props.setUser(userId);
    }

    render(){
        const users = this.props.users;
        let renderList = 'No Users';
        if (users) {
            renderList = users.map(user => {
                return (<a onClick={() => {this.handleOnClick(user.id)}} key={user.id} className="list-group-item">{user.name}</a>);
            });
        }
        const currentUser = this.props.currentUser;
        let userDetails = 'No User Selected';
        if (currentUser) {
            userDetails = `Hi, my name is ${currentUser.name}, I'm from ${currentUser.city}, and I'm a ${currentUser.occupation}`;
        }
        return(
            <div className="userlist-container">
                <div className="list-group">
                    {renderList}
                </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        {userDetails}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users,
        currentUser: state.user.userId ? state.user.users.filter(user => user.id === state.user.userId)[0] : null
    }
}

export default connect(mapStateToProps, { getUsers, setUser })(UserList);