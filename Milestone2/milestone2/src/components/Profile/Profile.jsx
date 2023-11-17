import React from 'react'
import Main from '../Main/Main'
import MyProfile from './MyProfile'
import RecentOrders from './RecentOrders'
function Profile() {
  return (
    <>
		<Main name="My Profile" />
    <MyProfile/>
    <RecentOrders/>
    </>
  )
}

export default Profile