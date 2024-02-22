import React from 'react'
import { notFound } from 'next/navigation'

interface Props {
  params: {id: number};
}


const UserDetailPage = ({params: {id}}: Props) => {
  if (id > 10) notFound()
  return (
    <div>User id is a {id}</div>
  )
}

export default UserDetailPage