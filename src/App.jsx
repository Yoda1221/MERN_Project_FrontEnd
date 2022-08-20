import { Routes, Route }  from 'react-router-dom'
import Login              from './features/auth/Login'
import Prefetch           from './features/auth/Prefetch'
import Welcome            from './features/auth/Welcome'
import { DashLayout, Layout, Public } from './components'
import { EditUser, NewUser, UsersList } from './features/users'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route element={<Prefetch />} >
          <Route path="dash" element={<DashLayout />}>
            <Route index element={<Welcome />} />
            <Route path="users">
              <Route index element={<UsersList />} />
              <Route path=":id" element={<EditUser />} />
              <Route path="new" element={<NewUser />} />
            </Route>
          </Route>{/* End Dash */}
        </Route>
      </Route>
    </Routes>
  )
}

export default App
