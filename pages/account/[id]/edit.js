import React from 'react'

export const EditUser = () => {
    return (
        <div>
            <p>Placeholder for now</p>
        </div>
    )
}

EditUser.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/users/${id}`);
    const { data } = await res.json();

    return { user: data }
}