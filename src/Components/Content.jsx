import { getAllMovies } from "../data/movies";
import MovieCard from "./MovieCard";
export default function Content() {
  const movies = getAllMovies();

  return (
    <>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {/* Begin Card */}
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}
          {/* End Card */}
        </div>
      </div>
    </>
  );
}
