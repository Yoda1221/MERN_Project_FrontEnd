import User from './User'
import { useGetUsersQuery } from "./usersApiSlice"

const UsersList = () => {
  
  let content
  const datas = useGetUsersQuery()
  const {
      data: users,
      isLoading,
      isSuccess,
      isError,
      error
  } = useGetUsersQuery()

  if (datas.isLoading)  content = <p>Loading...</p>
  if (datas.isError)    content = <p className="errmsg">{error?.data?.message}</p>
  if (datas.isSuccess) {
    const { ids } = datas.data
    const tableContent = ids?.length
        ? ids.map(userId => <User key={userId} userId={userId} />)
        : null
    content = (
        <table className="table table--users">
            <thead className="table__thead">
                <tr>
                    <th scope="col" className="table__th user__username">Username</th>
                    <th scope="col" className="table__th user__roles">Roles</th>
                    <th scope="col" className="table__th user__edit">Edit</th>
                </tr>
            </thead>
            <tbody>
                {tableContent}
            </tbody>
        </table>
    )
}
  return content
}

export default UsersList
