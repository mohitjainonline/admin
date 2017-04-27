import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';
import Utility from '../service/UtilityServices.jsx';
import LoginService from '../service/LoginServices.jsx';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {

debugger;

        var _id = Utility.getParameterByName("id")
        if(_id != null)
        {          
          var data = {
            _id : _id
          }
          LoginService.setUp(data).done(function(data){
            if(data.success == true)
              {
                Auth.authenticateUser(data);
                // change the current URL to /
                //_this.context.router.replace('/');
                window.location.href = "/"

              }
              else
              {

              }
          })
        }

        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
          
        } else {
          callback(null, HomePage);
          //window.location.href = "http://localhost:8080"
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        //replace('/');
        location.href("http://localhost:8080")
      }
    }

  ]
};

export default routes;
