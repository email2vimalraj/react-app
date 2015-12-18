import React, {Component} from 'react';
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
      </div>
    );
  }
}

export default Login;
