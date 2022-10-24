import { useRef, useState, useEffect }  from 'react'
import { useDispatch }                  from 'react-redux'
import { setCredentials }               from './authSlice'
import { useLoginMutation }             from './authApiSlice'
import { useNavigate, Link }            from 'react-router-dom'
import usePersist                       from '../../hooks/usePersist'

const Login = () => {
  const userRef   = useRef()
  const errRef    = useRef()
  const navigate  = useNavigate()
  const dispatch  = useDispatch()
  const [errMsg, setErrMsg]     = useState('')
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [persist, setPersist]   = usePersist()
  const [login, { isLoading }]  = useLoginMutation()

  const handleToggle    = ()  => setPersist(prev => !prev)
  const handleUserInput = (e) => setUsername(e.target.value)
  const handlePwdInput  = (e) => setPassword(e.target.value)

  const errClass = errMsg ? "errmsg" : "offscreen"

  if (isLoading) return <p>Loading...</p>

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const { accessToken } = await login({ userName, password }).unwrap()        
        console.log("🚀 ~ file: Login.jsx ~ line 28 ~ handleSubmit ~ accessToken", accessToken)
        dispatch(setCredentials({ accessToken }))
        setUsername('')
        setPassword('')
        navigate('/dash')
    } catch (err) {
        if (!err.status)              setErrMsg('No Server Response')
        else if (err.status === 400)  setErrMsg('Missing Username or Password')
        else if (err.status === 401)  setErrMsg('Unauthorized')
        else                          setErrMsg(err.data?.message)

        errRef.current.focus();
    }
  }

  /* useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [userName, password]) */

  return (
    <section className="public">
      <header><h1>Login</h1></header>
      <main className="login">
        <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="userName">Username</label>
          <input
              type="text"
              id="userName"
              className="form__input"
              ref={userRef}
              value={userName}
              autoComplete="off"
              onChange={handleUserInput}
              required
          />
          <label htmlFor="password">Password</label>
          <input
              type="password"
              id="password"
              className="form__input"
              value={password}
              onChange={handlePwdInput}
              required
          />
          <button className="form__submit-button">Sign In</button>
          <label htmlFor="persist" className="form__persist">
              <input
                  id="persist"
                  type="checkbox"
                  checked={persist}
                  onChange={handleToggle}
                  className="form__checkbox"
              />
              Trust This Device
          </label>
        </form>
      </main>
      <footer>
        <Link to="/">Back to Home</Link>
      </footer>
    </section>
  )
}

export default Login
