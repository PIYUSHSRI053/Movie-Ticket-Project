import { useMemo } from "react";
import MovieCard from "../components/MovieCard";
import BlurCircle from "../components/BlurCircle";
import { useAppContext } from "../context/AppContext";

const RecentReleases = () => {
  const { shows } = useAppContext(1);

  const recentMovies = useMemo(() => {
    if (!Array.isArray(shows)) return [];

    const now = Date.now();
    const DAYS_25 = 25 * 24 * 60 * 60 * 1000;

    return shows.filter((movie) => {
      if (!movie?.release_date) return false;

      const releaseTime = new Date(movie.release_date).getTime();
      if (isNaN(releaseTime)) return false;

      return now - releaseTime <= DAYS_25 && now - releaseTime >= 0;
    });
  }, [shows]);

  return (
    <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
      <BlurCircle top="150px" left="0px" />
      <BlurCircle bottom="50px" right="50px" />

      <h1 className="text-3xl font-medium my-4">
        Recent Releases
      </h1>

      {recentMovies.length === 0 ? (
        <p className="text-center text-gray-400 mt-20">
          No recent releases available.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {recentMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentReleases;
