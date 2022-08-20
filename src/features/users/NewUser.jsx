import { useState, useEffect }    from "react"
import { useAddNewUserMutation }  from "./usersApiSlice"
import { useNavigate }            from "react-router-dom"
import { FontAwesomeIcon }        from '@fortawesome/react-fontawesome'
import { faSave }                 from "@fortawesome/free-solid-svg-icons"
import { EMAIL_REGEX, PWD_REGEX, ROLES, USER_REGEX } from "../../config/config"

const NewUser = () => {

  const [addNewUser, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useAddNewUserMutation()

  const navigate = useNavigate()

  const [email, setEmail]                 = useState('')
  const [userName, setUsername]           = useState('')
  const [password, setPassword]           = useState('')
  const [validEmail, setValidEmail]       = useState(false)
  const [validUsername, setValidUsername] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [roles, setRoles]                 = useState(["User"])

  const errClass        = isError ? "errmsg" : "offscreen"
  const validUserClass  = !validUsername ? 'form__input--incomplete' : ''
  const validEmailClass = !validEmail ? 'form__input--incomplete' : ''
  const validPwdClass   = !validPassword ? 'form__input--incomplete' : ''
  const validRolesClass = !Boolean(roles.length) ? 'form__input--incomplete' : ''

  const onEmailChanged    = e => setEmail(e.target.value)
  const onUsernameChanged = e => setUsername(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)
  const onRolesChanged    = e => {
      const values = Array.from(
          e.target.selectedOptions, //HTMLCollection 
          (option) => option.value
      )
      setRoles(values)
  }

  const canSave = [roles.length, validUsername, validPassword].every(Boolean) && !isLoading
  const options = Object.values(ROLES).map(role => {
    return (<option key={role} value={role}>{ role }</option >)
  })

  const onSaveUserClicked = async (e) => {
      e.preventDefault()
      if (canSave) await addNewUser({ userName, email, password, roles })
  }

  useEffect(() => { setValidUsername(USER_REGEX.test(userName))
  }, [userName])

  useEffect(() => { setValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  useEffect(() => { setValidPassword(PWD_REGEX.test(password))
  }, [password])

  useEffect(() => {
      if (isSuccess) {
        setRoles([])
        setEmail('')
        setUsername('')
        setPassword('')
        navigate('/dash/users')
      }
  }, [isSuccess, navigate])
  
  return (
    <>
      <p className={errClass}>{error?.data?.message}</p>
      <form className="form" onSubmit={onSaveUserClicked}>
        <div className="form__title-row">
          <h2>New User</h2>
          <div className="form__action-buttons">
              <button className="icon-button" title="Save" disabled={!canSave}>
                  <FontAwesomeIcon icon={faSave} />
              </button>
          </div>
        </div>
        <label className="form__label" htmlFor="userName">
          Username: <span className="nowrap">[3-20 letters]</span>
        </label>
        <input
          id="userName"
          name="userName"
          type="text"
          value={userName}
          autoComplete="off"
          onChange={onUsernameChanged}
          className={`form__input ${validUserClass}`}
        />
        <label className="form__label" htmlFor="username">
          e-Mail: <span className="nowrap">[3-20 letters]</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          autoComplete="off"
          onChange={onEmailChanged}
          className={`form__input ${validEmailClass}`}
        />
        <label className="form__label" htmlFor="password">
          Password: <span className="nowrap">[4-12 chars incl. !@#$%]</span></label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={onPasswordChanged}
          className={`form__input ${validPwdClass}`}
        />
        <label className="form__label" htmlFor="roles">
            ASSIGNED ROLES:</label>
        <select
          id="roles"
          name="roles"
          size="3"
          value={roles}
          multiple={true}
          onChange={onRolesChanged}
          className={`form__select ${validRolesClass}`}
        >
            {options}
        </select>
      </form>
    </>
  )
}

export default NewUser
