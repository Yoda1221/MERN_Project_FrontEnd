import { useEffect }        from 'react'
import { store }            from '../../app/store'
import { Outlet }           from 'react-router-dom'
import { usersApiSlice }    from '../users/usersApiSlice'

const Prefetch = () => {
    useEffect(() => {
        const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

        return () => {users.unsubscribe()}
    }, [])

    return <Outlet/>
  
}

export default Prefetch
