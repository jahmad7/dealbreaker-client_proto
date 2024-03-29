import { Container } from 'unstated';

class UserContainer extends Container {
  state = {
    currentUser: null
  };

  // addUser (instaResponse) {
  //   this.setState({ 
  //     username: instaResponse.username,
  //     full_name: instaResponse.full_name,
  //     profile_picture: instaResponse.profile_picture
  //   })
  // }

  // removeUser () {
  //   this.setState({ 
  //     username: null,
  //     full_name: null,
  //     profile_picture: null
  //   })
  // }

  fetchUser = (url, data) => {
    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      mode: 'cors',
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(JSON.parse) //whyyy??? 
    .then((data) => {
      const currentUser = {
        username: data.username,
        full_name: data.full_name,
        profile_picture: data.profile_picture,
        returning_user: data.returning_user,
        logged_in: data.logged_in
      }
      this.setState({
        currentUser: currentUser
      })
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    });
  }
}
export default UserContainer