import { theatresByCity } from "../assets/theastres.js";
import CitySection from "../components/CitySection";
import BlurCircle from "../components/BlurCircle";

const Theatres = () => {
  return (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:ppx-40 xl:px-44 overflow-hidden min-h-[80vh]'>

      <BlurCircle top='150px' left='10px'/>
      <BlurCircle bottom='50px' right='50px'/>
      <BlurCircle top='600px' right='50px'/>
      <BlurCircle bottom='400px' left='10px'/>

      <h1
        className='text-3xl font-medium my-4'
      >
        Cinemas Across India
      </h1>

      {Object.entries(theatresByCity).map(
        ([city, theatres]) => (
          <CitySection
            key={city}
            city={city}
            theatres={theatres}
          />
        )
      )}
    </div>
  );
};

export default Theatres;
