import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const searchRef = useRef(null);

  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();
  const { favoriteMovies, shows, image_base_url } = useAppContext();

  const navLinkClass = ({ isActive }) =>
    `transition cursor-pointer ${
      isActive
        ? "text-primary/90 font-extrabold"
        : "text-gray-300 hover:text-white"
    }`;

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredMovies =
    search.length > 0
      ? shows.filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  return (
    <div className="absolute top-5 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 h-16">
      {/* LOGO */}
      <Link to="/" className="max-md:flex-1">
        <img src={assets.logo} alt="Logo" className="w-60 h-auto" />
      </Link>

      {/* NAV LINKS */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 
        max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row 
        items-center max-md:justify-center gap-8 md:px-8 py-3 
        max-md:h-screen md:rounded-full backdrop-blur 
        bg-black/70 md:bg-white/10 md:border border-gray-300/20 
        overflow-hidden transition-[width] duration-300
        ${isOpen ? "max-md:w-full" : "max-md:w-0"}`}
      >
        <XIcon
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer text-primary"
          onClick={() => setIsOpen(false)}
        />

        <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/movies" className={navLinkClass} onClick={() => setIsOpen(false)}>
          Movies
        </NavLink>
        <NavLink to="/theatres" className={navLinkClass} onClick={() => setIsOpen(false)}>
          Theatres
        </NavLink>
        <NavLink to="/recent-releases" className={navLinkClass} onClick={() => setIsOpen(false)}>
          Releases
        </NavLink>

        {favoriteMovies.length > 0 && (
          <NavLink to="/favorite" className={navLinkClass} onClick={() => setIsOpen(false)}>
            Favorites
          </NavLink>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="relative flex items-center gap-6">
        {/* 🔍 SEARCH ICON → EXPAND */}
        <div ref={searchRef} className="relative">
          {!showSearch ? (
            <SearchIcon
              className="w-6 h-6 cursor-pointer text-gray-300 hover:text-white"
              onClick={() => setShowSearch(true)}
            />
          ) : (
            <div className="relative">
              <input
                autoFocus
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search movies..."
                className="w-64 pl-4 pr-8 py-2 rounded-full bg-black/60 border border-gray-600 text-sm outline-none focus:border-primary"
              />

              <XIcon
                className="absolute right-2 top-2.5 w-4 h-4 cursor-pointer text-gray-400 hover:text-white"
                onClick={() => {
                  setShowSearch(false);
                  setSearch("");
                }}
              />

              {/* RESULTS */}
              {filteredMovies.length > 0 && (
                <div className="absolute top-12 left-0 w-full bg-black border border-gray-700 rounded-lg max-h-80 overflow-y-auto z-50">
                  {filteredMovies.slice(0, 6).map((movie) => (
                    <div
                      key={movie._id}
                      onClick={() => {
                        navigate(`/movies/${movie._id}`);
                        setSearch("");
                        setShowSearch(false);
                      }}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-primary/20 cursor-pointer"
                    >
                      <img
                        src={image_base_url + movie.poster_path}
                        alt={movie.title}
                        className="w-10 h-14 object-cover rounded"
                      />
                      <p className="text-sm">{movie.title}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* AUTH */}
        {!user ? (
          <button
            onClick={openSignIn}
            className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>

      {/* MOBILE MENU ICON */}
      <MenuIcon
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
    </div>
  );
};

export default Navbar;
