import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import Loading from "../components/Loading";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import isoTimeFormat from "../lib/isoTimeFormat";
import BlurCircle from "../components/BlurCircle";
import toast from "react-hot-toast";
import { useAppContext } from "../context/AppContext";

const SeatLayout = () => {
  const groupRows = [
    ["A", "B"],
    ["C", "D"],
    ["E", "F"],
    ["G", "H"],
    ["I", "J"],
    ["K"],
  ];

  const { id, date } = useParams();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);
  const [occupiedSeats, setOccupiedSeats] = useState([]);
  const [booking, setBooking] = useState(false);

  const { axios, getToken, user } = useAppContext();

  /* ---------------- FETCH SHOW ---------------- */
  const getShow = async () => {
    try {
      const { data } = await axios.get(`/api/show/${id}`);
      if (!data?.success) return toast.error("Failed to load show");
      setShow(data);
    } catch {
      toast.error("Something went wrong");
    }
  };

  /* ---------------- SEAT CLICK ---------------- */
  const handleSeatClick = (seatId) => {
    if (!selectedTime) return toast("Select time first");
    if (occupiedSeats.includes(seatId)) return toast("Seat already booked");
    if (!selectedSeats.includes(seatId) && selectedSeats.length >= 5)
      return toast("Max 5 seats");

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  /* ---------------- RENDER SEATS ---------------- */
  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex justify-center gap-2 mt-2">
      {Array.from({ length: count }, (_, i) => {
        const seatId = `${row}${i + 1}`;
        const isBooked = occupiedSeats.includes(seatId);
        const isSelected = selectedSeats.includes(seatId);

        return (
          <button
            key={seatId}
            disabled={isBooked}
            onClick={() => handleSeatClick(seatId)}
            className={`
              shrink-0 rounded border border-primary/60 font-medium transition
              h-6 w-6 text-[10px]
              sm:h-7 sm:w-7 sm:text-xs
              md:h-8 md:w-8
              ${isSelected ? "bg-primary text-white" : ""}
              ${isBooked ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/20"}
            `}
          >
            {seatId}
          </button>
        );
      })}
    </div>
  );

  /* ---------------- FETCH OCCUPIED SEATS ---------------- */
  const getOccupiedSeats = async () => {
    try {
      const { data } = await axios.get(
        `/api/booking/seats/${selectedTime.showId}`
      );
      if (!data?.success) return;
      setOccupiedSeats(data.occupiedSeats || []);
    } catch {
      toast.error("Failed to load seats");
    }
  };

  /* ---------------- BOOK ---------------- */
  const bookTickets = async () => {
    if (!user) return toast.error("Login required");
    if (!selectedTime || !selectedSeats.length)
      return toast.error("Select time & seats");

    setBooking(true);
    try {
      const { data } = await axios.post(
        "/api/booking/create",
        { showId: selectedTime.showId, selectedSeats },
        { headers: { Authorization: `Bearer ${await getToken()}` } }
      );

      data.success
        ? (window.location.href = data.url)
        : toast.error(data.message);
    } catch {
      toast.error("Booking failed");
    } finally {
      setBooking(false);
    }
  };

  /* ---------------- EFFECTS ---------------- */
  useEffect(() => {
    getShow();
  }, [id]);

  useEffect(() => {
    if (selectedTime) {
      getOccupiedSeats();
      setSelectedSeats([]);
    }
  }, [selectedTime]);

  if (!show) return <Loading />;

  return (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-20">
      {/* TIMINGS */}
      <div className="w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:absolute md:top-32 md:left-16 lg:left-40 z-40">
        <p className="text-lg font-semibold px-6">Available Timing</p>

        <div className="mt-5 space-y-1">
          {show?.dateTime?.[date]?.map((item) => (
            <div
              key={item.time}
              onClick={() => setSelectedTime(item)}
              className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer
                ${
                  selectedTime?.time === item.time
                    ? "bg-primary text-white"
                    : "hover:bg-primary/20"
                }`}
            >
              <ClockIcon className="w-4 h-4" />
              <p className="text-sm">{isoTimeFormat(item.time)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SEAT + SCREEN (SCROLL TOGETHER) */}
      <div className="relative flex-1 flex flex-col items-center md:ml-[22rem] mt-16">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle bottom="0" right="0" />

        <h1 className="text-2xl font-semibold mb-4">Select your seat</h1>

        {/* ✅ ONE SCROLL CONTAINER */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-max mx-auto flex flex-col items-center">
            {/* SCREEN */}
            <img
              src={assets.screenImage}
              alt="screen"
              className="w-full max-w-md mb-2"
            />
            <p className="text-gray-400 text-sm mb-6">SCREEN SIDE</p>

            {/* SEATS */}
            <div className="text-xs text-gray-300">
              <div className="grid grid-cols-2 gap-8 mb-6">
                {groupRows[0].map((row) => renderSeats(row))}
              </div>

              <div className="grid grid-cols-2 gap-10">
                {groupRows.slice(1, 5).map((group, idx) => (
                  <div key={idx} className="flex flex-col mb-6">
                    {group.map((row) => renderSeats(row))}
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-2">
                {groupRows[5].map((row) => renderSeats(row, 19))}
              </div>
            </div>
          </div>
        </div>

        <button
          disabled={booking}
          onClick={bookTickets}
          className="flex items-center gap-1 mt-16 px-10 py-3 text-sm bg-primary rounded-full hover:bg-primary-dull transition disabled:opacity-50"
        >
          {booking ? "Booking..." : "Proceed to Checkout"}
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SeatLayout;
