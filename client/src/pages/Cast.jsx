import { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import BlurCircle from "../components/BlurCircle";
import { useAppContext } from "../context/AppContext";

const Cast = () => {
  const { castId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { image_base_url, casts } = useAppContext();

  // priority: navigation state → context cache
  const cast =
    location.state ||
    casts.find((c) => String(c.id) === String(castId));

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  if (!cast) {
    return (
      <div className="p-10 text-center text-gray-400">
        Cast data not available
        <br />
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-2 bg-primary rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50 relative">
      <BlurCircle top="80px" left="-40px" />
      <BlurCircle bottom="80px" right="-40px" />

      {/* MAIN SECTION */}
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto items-center md:items-start">
        {/* IMAGE */}
        <img
          src={
            cast.profile_path
              ? image_base_url + cast.profile_path
              : "/fallback-cast.jpg"
          }
          alt={cast.name}
          className="w-60 h-60 md:w-72 md:h-96 object-cover rounded-xl border-4 border-primary-dull"
        />

        {/* DETAILS */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-4xl font-semibold text-primary">
            {cast.name}
          </h1>

          {cast.known_for_department && (
            <p className="text-gray-300 text-lg">
              {cast.known_for_department}
            </p>
          )}

          {cast.character && (
            <p className="text-sm text-gray-400">
              Known for playing <span className="text-white">{cast.character}</span>
            </p>
          )}

          <p className="text-gray-400 max-w-xl leading-relaxed mt-2">
            {cast.name} is a talented and well-recognized figure in the film industry,
            known for contributing memorable performances across a range of projects.
            With a strong presence on screen and a distinctive style, they have earned
            appreciation from audiences for their dedication and versatility.
            Their work continues to reflect passion, consistency, and a commitment
            to storytelling through cinema.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Cast;
