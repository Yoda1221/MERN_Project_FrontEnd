import { useState, useEffect }  from "react"
import { useNavigate }          from "react-router-dom"
import { FontAwesomeIcon }      from '@fortawesome/react-fontawesome'
import { faSave, faTrashCan }   from "@fortawesome/free-solid-svg-icons"
import { ROLES, EMAIL_REGEX, USER_REGEX } from "../../config/config"
import { useUpdateUserMutation, useDeleteUserMutation } from "./usersApiSlice"

const EditUserForm = ({ user }) => {

    const [updateUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateUserMutation()

    const [deleteUser, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteUserMutation()

    const navigate = useNavigate()

    const [email, setEmail]             = useState(user.email)
    const [validUsername, setValidUsername] = useState(false)
    const [validEmail, setValidEmail]   = useState(false)
    const [roles, setRoles]             = useState(user.roles)
    const [active, setActive]           = useState(user.active)
    const [username, setUsername]       = useState(user.userName)

    const errClass          = (isError || isDelError) ? "errmsg" : "offscreen"
    const validUserClass    = !validUsername ? 'form__input--incomplete' : ''
    const validEmailClass   = email && !validEmail ? 'form__input--incomplete' : ''
    const validRolesClass   = !Boolean(roles.length) ? 'form__input--incomplete' : ''
    const errContent        = (error?.data?.message || delerror?.data?.message) ?? ''

    const onUsernameChanged = e => setUsername(e.target.value)
    const onEmailChanged    = e => setEmail(e.target.value)
    const onRolesChanged    = e => {
        const values = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        )
        setRoles(values)
    }
    const onActiveChanged = () => setActive(prev => !prev)
    const onSaveUserClicked = async (e) => {
        await updateUser({ id: user.id, userName: username, email, roles, active })
        /* if (password) {
            await updateUser({ id: user.id, username, password, roles, active })
        } else {
            await updateUser({ id: user.id, username, roles, active })
        } */
    }
    const onDeleteUserClicked = async () => {
        await deleteUser({ id: user.id })
    }
    const options = Object.values(ROLES).map(role => {
        return (<option key={role} value={role} > {role}</option >)
    })
    let canSave
    canSave = [roles.length, validUsername].every(Boolean) && !isLoading
    /* if (password) {
        canSave = [roles.length, validUsername, validPassword].every(Boolean) && !isLoading
    } else {
        canSave = [roles.length, validUsername].every(Boolean) && !isLoading
    } */

    useEffect(() => { setValidUsername(USER_REGEX.test(username))
    }, [username])

    useEffect(() => { setValidEmail(EMAIL_REGEX.test(email))
    }, [email])

    useEffect(() => {
        if (isSuccess || isDelSuccess) {
            setUsername('')
            setEmail('')
            setRoles([])
            navigate('/dash/users')
        }

    }, [isSuccess, isDelSuccess, navigate])

  return (
    <>
        <p className={errClass}>{errContent}</p>
        <form className="form" onSubmit={e => e.preventDefault()}>
            <div className="form__title-row">
                <h2>Edit User</h2>
                <div className="form__action-buttons">
                    <button className="icon-button" title="Save" disabled={!canSave} onClick={onSaveUserClicked}>
                        <FontAwesomeIcon icon={faSave} />
                    </button>
                    <button className="icon-button" title="Delete" onClick={onDeleteUserClicked}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
            </div>
            <label className="form__label" htmlFor="username">
                Username: <span className="nowrap">[3-20 letters]</span>
            </label>
            <input
                className={`form__input ${validUserClass}`}
                id="username"
                name="username"
                type="text"
                value={username}
                autoComplete="off"
                onChange={onUsernameChanged}
            />
            <label className="form__label" htmlFor="password">
                e-Mail: 
                <span className="nowrap">[3-20 letters]</span> 
            </label>
            <input
                className={`form__input ${validEmailClass}`}
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={onEmailChanged}
            />
            <label className="form__label form__checkbox-container" htmlFor="user-active">
                ACTIVE:
                <input
                    id="user-active"
                    className="form__checkbox"
                    type="checkbox"
                    name="user-active"
                    checked={active}
                    onChange={onActiveChanged}
                />
            </label>
            <label className="form__label" htmlFor="roles">
                ASSIGNED ROLES:</label>
            <select
                id="roles"
                name="roles"
                size="3"
                value={roles}
                multiple={true}
                className={`form__select ${validRolesClass}`}
                onChange={onRolesChanged}
            >
                {options}
            </select>
        </form>
    </>
  )
}

export default EditUserForm
