import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import  { fetchUsers } from '../features/userSlice'

export default function UserView() {
    const dispatch=useDispatch()
    const user=useSelector((state)=>state.user2)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])
  return (
    <div>
      <h1>Users Data</h1>
      {user.loading && <div>...Loading</div>}
      {!user.loading && user.err ? <div>{user.err}</div>:null}
      {!user.loading && user.users.length ? (
        <ul>
            {user.users.map((user)=>(
                <li key={user.id}>{user.address.city}</li>
            ))}
        </ul>
      ):null}
      </div>
  )
}
