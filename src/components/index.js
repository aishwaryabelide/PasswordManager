import './index.css'

const YourPasswords = props => {
  const {urlDetails, showPassword, onDelete} = props
  const {url, username, password, id} = urlDetails
  const initial = username[0]

  const deleteList = () => {
    onDelete(id)
  }

  return (
    <div>
      <li className="password-items">
        <div className="logo-and-url">
          <div>
            <p className="user-logo">{initial}</p>
          </div>

          <div className="url-password">
            <p className="url">{url}</p>
            <p className="username">{username}</p>
            <p>
              {showPassword === true ? (
                {password}
              ) : (
                <img
                  className="masked-password"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                  alt="stars"
                />
              )}
            </p>
          </div>

          <button type="button" className="del-button">
            <img
              className="delete-icon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              testid="delete"
              onClick={deleteList}
            />
          </button>
        </div>
      </li>
    </div>
  )
}

export default YourPasswords
