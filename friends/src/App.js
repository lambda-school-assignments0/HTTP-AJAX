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
      inputName: '',
      inputAge: '',
      inputEmail: '',
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

  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAddFriend = e => {
    e.preventDefault();

    this.setState({
      friends: [...this.state.friends, 
        {
          id: this.state.friends[this.state.friends.length-1].id + 1,
          name: this.state.inputName,
          age: this.state.inputAge,
          email: this.state.inputEmail,
        }],
      inputName: '',
      inputAge: '',
      inputEmail: '',
    })
  }
  
  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} />
        <FriendForm handleTextChange={this.handleTextChange} inputName={this.state.inputName} inputAge={this.state.inputAge} inputEmail={this.state.inputEmail} handleAddFriend={this.handleAddFriend} />
      </div>
    );
  }
}

export default App;