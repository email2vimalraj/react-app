import React, {Component} from 'react';
import '../styles/plugins/font-awesome/css/font-awesome.min.css';
import '../styles/plugins/simple-line-icons/simple-line-icons.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/plugins/uniform/css/uniform.default.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
