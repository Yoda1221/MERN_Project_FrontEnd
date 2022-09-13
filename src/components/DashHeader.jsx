import { useEffect }                      from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { DASH_REGEX, USR_REGEX }          from "../config/config"
import { useSendLogoutMutation }          from '../features/auth/authApiSlice'
import { FontAwesomeIcon }                from '@fortawesome/react-fontawesome'
import { faRightFromBracket }             from "@fortawesome/free-solid-svg-icons"

const DashHeader = () => {
  let dashClass = null
  const navigate      = useNavigate()
  const { pathname }  = useLocation()
  const [sendLogout, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useSendLogoutMutation()

  const logoutButton = (
    <button className="icon-button" title="Logout" onClick={sendLogout}>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  )

  useEffect(() => {
    if (isSuccess) navigate('/')
  }, [isSuccess, navigate])

  if (isLoading)  return <p>Logging Out...</p>
  if (isError)    return <p>Error: {error.data?.message}</p>
  if (!DASH_REGEX.test(pathname) && !USR_REGEX.test(pathname)) {
      dashClass = "dash-header__container--small"
  }

  return (
    <header className="dash-header">
        <div className={`dash-header__container ${dashClass}`}>
            <Link to="/dash">
                <h1 className="dash-header__title">techNotes</h1>
            </Link>
            <nav className="dash-header__nav">
                {/* add more buttons later */}
                {logoutButton}
            </nav>
        </div>
    </header>
  )
}

export default DashHeader
