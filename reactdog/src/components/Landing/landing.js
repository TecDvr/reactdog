import { datadogRum } from '@datadog/browser-rum';
import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css'
import Logo from '../../assets/reactdog.png'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
      clicked: true,
      clickAmount: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:5000`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(resJSON => {
      this.setState({
        response: resJSON
      })
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      clicked: !this.state.clicked,
      clickAmount: this.state.clickAmount + 1
    })
    datadogRum.addUserAction('clicked button', {
      buttonClicked: {
          amount: this.state.clickAmount
      },
    });
  }

  handleReload(e) {
    e.preventDefault();
    window.location.reload(false);
  }

  errorFourClick(e) {
    e.preventDefault();
    fetch(`http://localhost:5000/api/four`, {
      method: 'GET'
    })
  }

  errorFiveClick(e) {
    e.preventDefault();
    fetch(`http://localhost:5000/api/five`, {
      method: 'GET'
    })
  }

  render() {
    return (
      <div>
        <div className='landing'>
          <img src={Logo} alt='reactdog' className='logo'/>
          <h1>REACTDOG</h1>
          <p>{this.state.response.message}</p>

          <div className='button-cluster'>
            <div className='server-error'>
              <h3><i className="fas fa-gamepad"></i> CLICK SIMULATOR</h3>
              <div className='test'>
                {this.state.clicked === true ? <button onClick={this.handleClick}>click me</button> : <button onClick={this.handleClick}>clicked</button>}
                {this.state.clicked === true ? <div className='not clicked'></div> : <div className='clicked'></div>}
              </div>
            </div>
            <div className='server-error'>
              <h3><i className="fas fa-gamepad"></i> NAVIGATION SIMULATOR</h3>
              <button onClick={this.handleReload}>reload page</button>
              <Link to='/test'><button>test page</button></Link>
            </div>
            <div className='server-error'>
              <h3><i className="fas fa-gamepad"></i> SERVER ERROR SIMULATOR</h3>
              <button onClick={this.errorFourClick}>400 error</button>
              <button onClick={this.errorFiveClick}>500 error</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}