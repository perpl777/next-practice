import React from 'react'

interface Props {
    params: {
        id: number;
        photoId: number;
    }
}

const PhotoPage = ({params: {id, photoId}}: Props) => {
    return (
        <div>User {id} and his photo number {photoId}</div>
    )
}

export default PhotoPage