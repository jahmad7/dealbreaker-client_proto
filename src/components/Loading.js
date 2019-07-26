import React, {Component} from 'react';
import { Subscribe } from 'unstated';

import UserContainer from '../containers/users';


// Get OAUTH Instagram code from url params
let params = (new URL(document.location)).searchParams;
let code = params.get('code');
console.log(code);

const url = process.env.REACT_APP_SESSIONS_URL || 'https://dealbreakergame-server.herokuapp.com/sessions';
const data = {
  code: code,
  test: "test"
 };

//let incomingData = null;

// fetch(url, {
//   method: 'POST', // or 'PUT'
//   headers: { "Content-Type": "application/json" },
//   mode: 'cors',
//   body: JSON.stringify(data), // data can be `string` or {object}!
// }).then(res => res.json()
// ).then( (data) => {
  
//   incomingData = data;
  
//   //console.log(incomingData);
// });



class Loading extends Component {

  render() {

    return (
      <div>
        <h1>DEALBREAKER</h1>
        <p>---</p>
        <Subscribe to={[UserContainer]}>
          {userInfo => (
            <div>
              { console.log(userInfo.state) }
              { !userInfo.state.currentUser ? <h2>Loading...</h2> : null }
              { userInfo.state.currentUser ? null : userInfo.fetchUser(url, data) }
              
              <p>{ userInfo.state.currentUser != null ? userInfo.state.currentUser.username : null }</p>
              <p>{ userInfo.state.currentUser != null ? userInfo.state.currentUser.full_name : null }</p>
              <img src={ userInfo.state.currentUser != null ? userInfo.state.currentUser.profile_picture : null }/>
            </div>
          )}
        </Subscribe>
      </div>
    );
  
  }
}

export default Loading;
