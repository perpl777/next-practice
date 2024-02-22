import React from 'react'

interface Props {
    params: { slug: string[] },
    searchParams: {sortOrder: string}
}

const ProductPage = ({params: {slug}, searchParams: {sortOrder}}: Props) => {
    return (
        <>
            { slug && slug.map(item => <p>{item}</p>) }
            { sortOrder && <p>Order by {sortOrder}</p>}
        </>
    )
}

export default ProductPage