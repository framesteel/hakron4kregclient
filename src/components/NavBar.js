import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
  }
  componentDidMount() {
  }
  render() {
    return(
      <div style={container}>
        <div style={tab}/>
        <Link to="/" style={tab}>
          <div >
            <p>Login</p>
          </div>
        </Link>
        <Link to="/register" style={tab}>
          <div >
            <p>Register</p>
          </div>
        </Link>
        <Link to="view" style={tab}>
          <div >
            <p>View</p>
          </div>
        </Link>
        <div style={tab}/>
      </div>
    )
  }
}
export default NavBar

var container = {
  height: 50,
  width: '100%',
  display: 'flex',
  flexDirection: 'row'
}
var tab = {
  flex: 1,
  textAlign: 'center',
  borderWidth: 1,
  borderStyle: 'solid'
}
