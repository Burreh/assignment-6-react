import React from 'react'

export default function OrderByAlpha({ sortAlpha }) {

    return (
        <button onClick={sortAlpha} className="btn btn-primary mt-3 mx-2">Sortera (A-Z)</button>
    )
}

