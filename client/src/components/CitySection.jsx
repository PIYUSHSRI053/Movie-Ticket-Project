import TheatreCard from "./TheatreCard";

const CitySection = ({ city, theatres, setIsOpen }) => {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-white mb-4">
        {city}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {theatres.map((theatre, index) => (
          <TheatreCard
            key={index}
            city={city}
            name={theatre}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default CitySection;
