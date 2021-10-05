import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import YourPasswords from './components'
import './App.css'

let initialUrlList = []
let listCount = 0

class App extends Component {
  state = {
    urlList: initialUrlList,
    url: '',
    username: '',
    password: '',
    showPassword: false,
    searchInput: '',
  }

  onChangeWebsiteName = event => {
    this.setState({url: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {url, username, password, urlList} = this.state

    const newList = {
      id: uuidv4(),
      url,
      username,
      password,
    }

    this.setState(prevState => ({
      urlList: [...prevState.urlList, newList],
      url: '',
      username: '',
      password: '',
    }))

    listCount += 1

    initialUrlList = urlList
    console.log(initialUrlList)
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDelete = id => {
    const {urlList} = this.state
    const filteredurlList = urlList.filter(each => each.id !== id)
    this.setState({
      urlList: filteredurlList,
    })

    listCount -= 1
  }

  render() {
    const {
      url,
      username,
      password,
      urlList,
      showPassword,
      searchInput,
    } = this.state
    const noPasswordUrl =
      'https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'
    const searchResults = urlList.filter(eachUser =>
      eachUser.url.includes(searchInput),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager sm img"
            className="small-password-manager"
          />
          <div className="card">
            <form type="submit" onSubmit={this.onSubmitForm}>
              <h1 className="title">Add New Password</h1>
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
                  value={url}
                  onChange={this.onChangeWebsiteName}
                />
              </div>

              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-img"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-msg"
                  value={username}
                  onChange={this.onChangeUsername}
                />
              </div>

              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-img"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-msg"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="button-container">
                <button className="button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="password-card-container">
          <div className="count-container">
            <div className="flex-row">
              <h1 className="password-title">Your Passwords</h1>
              <p className="number">{listCount}</p>
            </div>

            <div className="search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-img"
              />
              <input
                type="search"
                placeholder="Search"
                className="search-msg"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="show-password">
            <input
              id="checkbox"
              type="checkbox"
              onClick={this.toggleShowPassword}
            />
            <label htmlFor="checkbox" className="label">
              Show Passwords
            </label>
          </div>
          {listCount === 0 ? (
            <div className="align-center">
              <img
                src={noPasswordUrl}
                alt="no passwords"
                className="small-password-manager"
              />
              <p className="password-title">No Passwords</p>{' '}
            </div>
          ) : (
            ''
          )}

          {searchResults.length === 0 ? (
            <div className="align-center">
              <img
                src={noPasswordUrl}
                alt="no passwords"
                className="small-password-manager"
              />
              <p className="password-title">No Passwords</p>{' '}
            </div>
          ) : (
            ''
          )}
          <ul className="unordered-list">
            {searchResults.map(eachList => (
              <YourPasswords
                key={eachList.id}
                urlDetails={eachList}
                showPassword={showPassword}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
