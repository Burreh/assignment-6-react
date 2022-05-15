import React from 'react'

export default function OrderByGrade({ sortGrade }) {
    return (
        <button onClick={sortGrade} className="btn btn-primary mt-3 mx-2">Betygsordning</button>
    )
}
