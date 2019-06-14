import React from 'react';
import axios from 'axios';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      errorMsg: '',
      friends: [],
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(err => {
        this.setState({ errorMsg: err });
      });
  }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', friend)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => {
        this.setState({ errorMsg: err });
      });
  }

  deleteFriend = (e, friend) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => {
        this.setState({ errorMsg: err });
      });
  }

  updateFriend = (e, friend) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => {
        this.setState({ errorMsg: err });
      });
  }
  
  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} deleteFriend={this.deleteFriend} updateFriend={this.updateFriend} />
        <FriendForm addFriend={this.addFriend} />
      </div>
    );
  }
}

export default App;