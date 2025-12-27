import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Title from "../../components/admin/Title";
import { CheckIcon, DeleteIcon, StarIcon } from "lucide-react";
import { kConverter } from "../../lib/kConverter";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddShows = () => {
  const { axios, getToken, user, image_base_url } = useAppContext();
  const currency = import.meta.env.VITE_CURRENCY;

  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({});
  const [dateTimeInput, setDateTimeInput] = useState("");
  const [showPrice, setShowPrice] = useState("");
  const [addingShow, setAddingShow] = useState(false);

  // 🔴 MISSING STATES (THIS WAS YOUR BUG)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // ---------------- FETCH MOVIES ----------------
  const fetchNowPlayingMovies = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { data } = await axios.get("/api/show/now-playing", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (data?.success) {
        setNowPlayingMovies(data.movies || []);
      } else {
        setError("Failed to load movies");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Something went wrong while loading movies");
    } finally {
      setIsLoading(false);
    }
  };

  // ---------------- DATE TIME HANDLERS ----------------
  const handleDateTimeAdd = () => {
    if (!dateTimeInput) return;

    const [date, time] = dateTimeInput.split("T");
    if (!date || !time) return;

    setDateTimeSelection((prev) => {
      const times = prev[date] || [];
      if (times.includes(time)) return prev;
      return { ...prev, [date]: [...times, time] };
    });

    setDateTimeInput("");
  };

  const handleRemoveTime = (date, time) => {
    setDateTimeSelection((prev) => {
      const updatedTimes = prev[date].filter((t) => t !== time);
      if (updatedTimes.length === 0) {
        const { [date]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [date]: updatedTimes };
    });
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = async () => {
    if (!selectedMovie || !showPrice || Object.keys(dateTimeSelection).length === 0) {
      toast.error("Missing required fields");
      return;
    }

    try {
      setAddingShow(true);

      const showsInput = Object.entries(dateTimeSelection).map(
        ([date, time]) => ({ date, time })
      );

      const payload = {
        movieId: selectedMovie,
        showsInput,
        showPrice: Number(showPrice),
      };

      const { data } = await axios.post("/api/show/add", payload, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (data.success) {
        toast.success(data.message);
        setSelectedMovie(null);
        setDateTimeSelection({});
        setShowPrice("");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Failed to add show");
    } finally {
      setAddingShow(false);
    }
  };

  // ---------------- EFFECT ----------------
  useEffect(() => {
    if (!user) return;
    fetchNowPlayingMovies();
  }, [user]);

  // ---------------- RENDER LOGIC (FIXED) ----------------
  if (isLoading) return <Loading />;

  if (error) {
    return <p className="mt-10 text-red-500">{error}</p>;
  }

  if (nowPlayingMovies.length === 0) {
    return <p className="mt-10 text-gray-400">No movies currently playing</p>;
  }

  // ---------------- UI ----------------
  return (
    <>
      <Title text1="Add" text2="Shows" />

      <p className="mt-10 text-lg font-medium">Now Playing Movies</p>

      <div className="overflow-x-auto pb-4">
        <div className="group flex flex-wrap gap-4 mt-4 w-max">
          {nowPlayingMovies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => setSelectedMovie(movie.id)}
              className={`relative max-w-40 cursor-pointer hover:-translate-y-1 transition duration-300 ${selectedMovie ? (selectedMovie === movie.id ? "opacity-100 scale-105" : "opacity-40") : "opacity-100"}`}

            >

              <div className="rounded-lg overflow-hidden relative">
                <img
                  src={image_base_url + movie.poster_path}
                  alt={movie.title}
                  className="w-full object-cover brightness-90"
                />

                <div className="text-sm flex items-center justify-between p-2 bg-black/70 w-full absolute bottom-0 left-0">
                  <span className="flex items-center gap-1 text-gray-300">
                    <StarIcon className="w-4 h-4 fill-primary text-primary" />
                    {movie.vote_average.toFixed(1)}
                  </span>
                  <span className="text-gray-400">
                    {kConverter(movie.vote_count)} votes
                  </span>
                </div>
              </div>

              {selectedMovie === movie.id && (
                <div className="absolute top-2 right-2 bg-primary w-6 h-6 rounded flex items-center justify-center">
                  <CheckIcon className="w-4 h-4 text-white" />
                </div>
              )}

              <p className="font-medium truncate">{movie.title}</p>
              <p className="text-sm text-gray-400">{movie.release_date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="mt-8">
        <label className="block text-sm font-medium mb-2">Show Price</label>
        <div className="inline-flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-md">
          <p className="text-gray-400 text-sm">{currency}</p>
          <input
            min={0}
            type="number"
            value={showPrice}
            onChange={(e) => setShowPrice(e.target.value)}
            placeholder="Enter show price"
            className="outline-none"
          />
        </div>
      </div>

      {/* DATE TIME */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">
          Select Date and Time
        </label>
        <div className="inline-flex gap-5 border border-gray-600 p-1 pl-3 rounded-lg">
          <input
            type="datetime-local"
            value={dateTimeInput}
            onChange={(e) => setDateTimeInput(e.target.value)}
            className="outline-none rounded-md"
          />
          <button
            onClick={handleDateTimeAdd}
            className="bg-primary/80 text-white px-3 py-2 text-sm rounded-lg hover:bg-primary cursor-pointer"
          >
            Add Time
          </button>
        </div>
      </div>

      {/* SELECTED TIMES */}
      {Object.keys(dateTimeSelection).length > 0 && (
        <div className="mt-6 space-y-3">
          {Object.entries(dateTimeSelection).map(([date, times]) => (
            <div key={date}>
              <p className="font-medium">{date}</p>
              <div className="flex gap-2 flex-wrap mt-2">
                {times.map((time) => (
                  <div
                    key={time}
                    className="flex items-center gap-2 border border-primary px-2 py-1 rounded"
                  >
                    <span>{time}</span>
                    <DeleteIcon
                      size={14}
                      onClick={() => handleRemoveTime(date, time)}
                      className="cursor-pointer text-red-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={addingShow}
        className="mt-8 bg-primary px-8 py-2 rounded text-white"
      >
        {addingShow ? "Adding..." : "Add Show"}
      </button>
    </>
  );
};

export default AddShows;
