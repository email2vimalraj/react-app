import React, {Component} from 'react';
import {Link} from 'react-router';
import '../styles/login.css';
import '../styles/components-md.css';
import '../styles/plugins-md.css';
import '../styles/layout.css';
import '../styles/theme-default.css';

class Login extends Component {

  constructor() {
    super();
  }

  componentWillMount() {
    document.body.classList.add('login');
  }

  render() {
    return(
      <div>
        <div className="menu-toggler sidebar-toggler"></div>

        <div className="logo">
            <h3 style={{"color": "#4DB3A5"}}>PARSONS PROBLEMS</h3>
        </div>

        <div className="content">

          <form className="login-form" role="form">
            <h3 className="form-title">Sign In</h3>

            <div className="alert alert-danger display-hide">
              <button className="close" data-close="alert"></button>
              <span>Enter username and password.</span>
            </div>

            <div className="form-group">
                <label className="control-label visible-ie8 visible-ie9">Username</label>
                <input type="text" className="form-control form-control-solid placeholder-no-fix" autoComplete="off" placeholder="Username" name="username" />
            </div>

            <div className="form-group">
                <label className="control-label visible-ie8 visible-ie9">Password</label>
                <input type="password" className="form-control form-control-solid placeholder-no-fix" autoComplete="off" placeholder="Password" name="password" />
            </div>

            <div className="form-actions">
                <button className="btn btn-success uppercase">Login</button>

                <label className="rememberme check">
                    <input type="checkbox" name="remember" value="1" /> Remember
                </label>

                <Link to="/forgotpassword" id="forget-password" className="forget-password">Forgot Password?</Link>
            </div>

            <div className="create-account">
                <p>
                    <Link to="/signup" id="register-btn" className="uppercase">Create an account</Link>
                </p>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

export default Login;
