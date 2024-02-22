import React, { Suspense } from 'react'
import UserTable from './user-table'
import Link from 'next/link'


interface Props {
    searchParams: {sortOrder: string}
}

const UsersPage = async ({searchParams: {sortOrder}}: Props) => {

    return (
        <>
            <h1>Users</h1>
            <Link href="/users/new" className='btn btn-primary'> create user </Link>

            <Suspense fallback={<p>loading...</p>}>
                <UserTable sortOrder={sortOrder}/>
            </Suspense>
        </>
    )
}

export default UsersPage