import { useState, useRef } from "react";
import { useAppContext } from "../context/AppContext";
import BlurCircle from "./BlurCircle";
import {
  PlayCircleIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const TrailerSections = () => {
  const { shows, image_base_url } = useAppContext();
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  if (!shows || shows.length === 0) return null;

  const isMobile = window.innerWidth < 768;

  const CARD_WIDTH = isMobile ? 160 : 220;
  const VISIBLE_COUNT = isMobile ? 2 : 4;
  const maxIndex = Math.max(shows.length - VISIBLE_COUNT, 0);

  const openTrailer = (title) => {
    const query = encodeURIComponent(`${title} official trailer`);
    window.open(
      `https://www.youtube.com/results?search_query=${query}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // 🔹 Touch handlers (mobile swipe)
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;

    if (deltaX > 50 && index < maxIndex) {
      setIndex((i) => i + 1);
    } else if (deltaX < -50 && index > 0) {
      setIndex((i) => i - 1);
    }
    touchStartX.current = null;
  };

  return (
    <div className="px-4 md:px-16 lg:px-24 xl:px-44 py-16 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg mb-6">
        Trailers
      </p>

      <div className="relative">
        <BlurCircle top="-80px" right="-80px" />

        {/* Desktop Arrows ONLY */}
        {!isMobile && index > 0 && (
          <button
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       bg-black/60 hover:bg-primary p-2 rounded-full"
          >
            <ChevronLeft className="text-white" />
          </button>
        )}

        {!isMobile && index < maxIndex && (
          <button
            onClick={() =>
              setIndex((i) => Math.min(i + 1, maxIndex))
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       bg-black/60 hover:bg-primary p-2 rounded-full"
          >
            <ChevronRight className="text-white" />
          </button>
        )}

        {/* Slider */}
        <div
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex gap-4 md:gap-10 transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${index * CARD_WIDTH}px)`,
            }}
          >
            {shows.map((movie) => (
              <div
                key={movie._id}
                onClick={() => openTrailer(movie.title)}
                className="relative cursor-pointer shrink-0 
                           w-[160px] md:w-[200px] group"
              >
                <img
                  src={
                    movie.poster_path
                      ? image_base_url + movie.poster_path
                      : "/fallback-movie.jpg"
                  }
                  alt={movie.title}
                  className="rounded-lg w-full h-[230px] md:h-[300px]
                             border-[8px] md:border-[10px] border-primary/30
                             object-cover brightness-75
                             group-hover:brightness-95 transition"
                />

                <PlayCircleIcon
                  strokeWidth={1.6}
                  className="absolute top-1/2 left-1/2 w-10 h-10 md:w-12 md:h-12
                             -translate-x-1/2 -translate-y-1/2
                             text-white opacity-90
                             group-hover:scale-110 transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Hint */}
        {isMobile && (
          <p className="mt-4 text-xs text-gray-400 text-center">
            Swipe to explore trailers
          </p>
        )}
      </div>
    </div>
  );
};

export default TrailerSections;
