import React from 'react';
import axios from 'axios';
import FriendList from './components/FriendList';
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
  
  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;