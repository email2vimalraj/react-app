import React, {Component} from 'react';
import {Link} from 'react-router';
import '../styles/login.css';
import '../styles/components-md.css';
import '../styles/plugins-md.css';
import '../styles/layout.css';
import '../styles/theme-default.css';

class ForgotPassword extends Component {

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

          <form className="forget-form" role="form">
            <h3>Forgot Password ?</h3>

            <p className="hint">Enter your e-mail address below to reset your password.</p>

            <div className="form-group">
                <input type="text" className="form-control placeholder-no-fix" autoComplete="off" placeholder="Email" name="email" />
            </div>

            <div className="form-actions">
                <Link to="/" className="btn btn-default" id="back-btn" type="button">Back</Link>
                <button className="btn btn-success uppercase pull-right" type="submit">Submit</button>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

export default ForgotPassword;
