import React from 'react';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      email2: '',
      password2: '',
      password3: '',
      login: true
    };
    this.handleChange = this.handleChange.bind(this)
    this.signup = this.signup.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name
    console.log(target.value)
    this.setState({
      [name]: value
    })
  }
  toggle = () => {
    var check = this.state.login
    this.setState({
      login: !check
    })
  }
  login = () => {
    this.props.history.push({
      pathname: '/register',
      email: 'Colin' // your data array of objects
    })
  }
  signup() {
    if (this.state.password2===this.state.password3) {
      const values = JSON.stringify({
        email: this.state.email2,
        password: this.state.password2,
        hasapplication: false
      })
      var resp = this.postUser(values).then(alert('Signup Successful, please login'))
      console.log(resp)
    }
    else {
      window.alert('Passwords do not match')
    }
  }
  postUser(values) {
    console.log('attempting to create a user')
    /*return fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: values
    })*/
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    var height = this.state.height * .9
    var width = this.state.width
    var login = this.state.login
    if (login) {
      return(
        <div style={{width: width, height: height, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={panel}>
            <div style={top}>
              <div style={topBarrier}/>
              <div style={topCenter}>
                <h2 style={headerStyle}>Login Form</h2>
              </div>
              <div style={topBarrier}/>
            </div>
            <div style={body}>
              <p style={textStyle}>Email</p>
              <input style={textInput} type="text" name='email' value={this.state.email} onChange={this.handleChange}/>
              <p style={textStyle}> </p>
              <p style={textStyle}>Password</p>
              <input style={textInput} type="text" name='password' value={this.state.password} onChange={this.handleChange}/>
            </div>
            <div style={bottom}>
              <div style={button} onClick={this.login}>
                <p style={buttonText}>Login!</p>
              </div>
              <div style={question} onClick={this.toggle}>
                <p style={textStyle}>Don't have an account yet? Click me to register.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else {
      return(
        <div style={{width: width, height: height, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={panel}>
            <div style={top}>
              <div style={topBarrier}/>
              <div style={topCenter}>
                <h2 style={headerStyle}>Sign Up Form</h2>
              </div>
              <div style={topBarrier}/>
            </div>
            <div style={body}>
              <p style={textStyle}>email</p>
              <input style={textInput} type="text" name='email2' value={this.state.email2} onChange={this.handleChange}/>
              <p style={textStyle}>Password</p>
              <input style={textInput} type="text" name='password2' value={this.state.password2} onChange={this.handleChange}/>
              <p style={textStyle}>Confirm Password</p>
              <input style={textInput} type="text" name='password3' value={this.state.password3} onChange={this.handleChange}/>
            </div>
            <div style={bottom}>
              <div style={button} onClick={this.signup}>
                <p style={buttonText}>Sign Up!</p>
              </div>
              <div style={question} onClick={this.toggle}>
                <p style={textStyle}>Already have an account? Click me to login.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
export default Login

var panel = {
  backgroundColor: 'gray',
  height: 400,
  width: 350,
  display: 'flex',
  flexDirection: 'column'
}
var top = {
  textAlign: 'center',
  display: 'flex',
  flex: 1
}
var topCenter = {
  flex: 3.5,
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: 'black'
}
var topBarrier = {
  flex: 1
}
var textInput = {
  width: '80%',
  height: 25,
  margin: 0,
  marginTop: 5,
  marginBottom: 20,
}

var body = {
  flex: 3,
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}
var bottom = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'

}
var textStyle = {
  margin: 0,
}
var button = {
  width: '30%',
  height: 30,
  backgroundColor: 'white',
  textAlign: 'center',
  marginBottom: 15,
}
var buttonText = {
  marginTop: 5,
}
var headerStyle = {
  margin: 0,
  marginTop: 30,
}
var question = {

}
