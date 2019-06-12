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
        console.log(err);
        this.setState({ errorMsg: err });
      });
  }

  handleAddFriend = e => {
    e.preventDefault();
    let newFriendName = document.getElementsByName('name')[0].value;
    let newFriendAge = document.getElementsByName('age')[0].value;
    let newFriendEmail = document.getElementsByName('email')[0].value;

    this.setState({
      friends: [...this.state.friends, 
        {
          id: this.state.friends[this.state.friends.length-1].id + 1,
          name: newFriendName,
          age: newFriendAge,
          email: newFriendEmail,
        }]
    })
  }
  
  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} />
        <FriendForm handleAddFriend={this.handleAddFriend} />
      </div>
    );
  }
}

export default App;