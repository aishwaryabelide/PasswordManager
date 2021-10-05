import {Component} from 'react'
import YourPasswords from './components'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="logo"
          className="logo"
        />
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager sm img"
            className="small-password-manager"
          />
          <div className="card">
            <form type="submit">
              <p className="title">Add New Password</p>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website-img"
                  className="input-img"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-msg"
                />
              </div>

              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username-img"
                  className="input-img"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-msg"
                />
              </div>

              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password-img"
                  className="input-img"
                />
                <input
                  type="text"
                  placeholder="Enter Password"
                  className="input-msg"
                />
              </div>
              <div className="button-container">
                <button className="button">Add</button>
              </div>
            </form>
          </div>
        </div>

        <div className="card-container">
          <div className="flex-row">
            <p className="password-title">Your Passwords</p>
            <p className="number">2</p>
            <div className="search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="password-img"
                className="search-img"
              />
              <input
                type="search"
                placeholder="Search"
                className="search-msg"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="show-password">
            <input id="checkbox" type="checkbox" />
            <label htmlFor="checkbox" className="label">
              Show Passwords
            </label>
          </div>
          <ul className="list">
            <YourPasswords />
          </ul>
        </div>
      </div>
    )
  }
}

export default App
