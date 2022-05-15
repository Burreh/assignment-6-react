import Movie from './Movie'

export default function MovieList({ movies, onDelete }) {

    return (
        <div>
            <ul className="list-group">
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );
}