import { useNavigate } from "react-router-dom";

const TheatreCard = ({ city, name, setIsOpen }) => {
  const navigate = useNavigate();

  // convert to URL-safe string
  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const handleClick = () => {
    window.scrollTo(0, 0);
    if (setIsOpen) setIsOpen(false);

    navigate(
      `/${slugify(city)}/${slugify(name)}/movies`
    );
  };

  return (
    <div
      onClick={handleClick}
      className="
        bg-[#1b1b1b]
        rounded-lg
        px-4
        py-3
        text-sm
        text-gray-200
        shadow
        transition
        hover:bg-primary/20
        hover:text-white
        cursor-pointer
        select-none
      "
    >
      🎬 {name}
    </div>
  );
};

export default TheatreCard;
