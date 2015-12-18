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
        <div className="row">
          <div className="col-md-4" style={{"backgroundColor": "green"}}>
            <p>Hello, </p>
          </div>

          <div className="col-md-8" style={{"backgroundColor": "red"}}>
            <p>World!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
