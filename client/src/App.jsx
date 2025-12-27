import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import SeatLayout from "./pages/SeatLayout";
import Favorite from "./pages/Favorite";
import { Toaster } from 'react-hot-toast'
import Footer from "./components/Footer";
import Cast from "./pages/Cast";
import MyBookings from "./pages/MyBookings";
import Layout  from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import AddShows from "./pages/admin/AddShows";
import ListShows from "./pages/admin/ListShows";
import ListBookings from "./pages/admin/ListBookings";
import RecentReleases from "./pages/RecentReleases";
import Theatres from "./pages/Theatres";
import About from "./pages/About";
import { useAppContext } from "./context/AppContext";
import { SignIn } from "@clerk/clerk-react";
import Loading from "./components/Loading";


const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  const{ user } = useAppContext()

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movie />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/movies/:id/:date' element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/loading/:nextUrl" element={<Loading />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path="/cast/:castId" element={<Cast />} />
        <Route path="/recent-releases" element={<RecentReleases />} />
        <Route path="/theatres" element={<Theatres />}/>
        <Route path="/:city/:hall/movies" element={<Movie />}/>
        <Route path="/about" element={<About />} />
        <Route path="/admin/*"  element={user ? <Layout/> : (
          <div className="min-h-screen flex justify-center items-center">
            <SignIn fallbackRedirectUrl={"/admin"}/>
          </div>
        )}>
          <Route index element={<Dashboard/>} />
          <Route path="add-shows" element={<AddShows/>} />
          <Route path="list-shows" element={<ListShows/>} />
          <Route path="list-bookings" element={<ListBookings/>} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer/>}

    </>
  )
}

export default App