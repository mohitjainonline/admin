import React from 'react';
import Auth from '../modules/Auth';
import Profile from '../components/Profile.jsx';
import UserService from '../../service/UserService.jsx';

class ProfilePage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user : null
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    
    var _this = this;
    UserService.memberinfo().done(function(data){
      
      if(data.success == true)
      {
        _this.setState({          
          user : data.user
        });
      }
      else
      {

      }
    })

  }

  /**
   * Render the component.
   */
  render() {      
       if(this.state.user == null)
        {
            return (<div>Loading</div>);
        }

      return (<Profile user={this.state.user} />);    
  }

}

export default ProfilePage;
