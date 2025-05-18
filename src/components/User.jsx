import React from 'react'

const User = ({name,email,mobile,children}) => { 
  return (
    <>
    <p>name:aishwarya</p>
    <p>email:aishwarya@123</p>
    <p>mobile:9538124677</p>
    {children}
    </>
  )
}

export default User;