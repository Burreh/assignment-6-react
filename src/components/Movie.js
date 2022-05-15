import React from 'react'
import star from '../images/star.png'
import cross from '../images/delete.png'

export default function Movie({ movie, onDelete }) {

    // Adds the user's grade as stars
    function addStars(grade) {
        let stars = [];
        for (let i = 0; i < grade; i++) {
            stars.push(<img src={star} alt="Star-image" />);
        }

        return stars
    }

    return (
        <li className="list-group-item">
            {movie.title}
            {addStars(movie.grade)}
            <img src={cross} alt="X-image" style={{ cursor: 'pointer' }}
                onClick={() => onDelete(movie.id)} />
        </li>
    )
}