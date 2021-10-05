import './index.css'

const YourPasswords = props => {
  const {myname} = props
  return (
    <li className="password-items">
      <div className="logo-and-url">
        <div className="">
          <p className="user-logo">Y</p>
        </div>

        <div className="url-password">
          <p className="url">youtube.com</p>
          <p className="username">rahul</p>
          <div>
            <img
              className="masked-password"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="password img"
            />
          </div>
        </div>

        <button type="button" className="del-button">
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete img"
          />
        </button>
      </div>
    </li>
  )
}

export default YourPasswords
