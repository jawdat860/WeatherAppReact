import { FaMapMarkerAlt } from "react-icons/fa";

/**
 * ButtonLocation component renders a button with a map marker icon for triggering location-based actions.
 * @param {Object} props - Component props
 * @param {Function} props.getYourLocationWeather - Function to fetch weather based on user's location
 * @returns {JSX.Element} ButtonLocation component
 */
function ButtonLocation(props) {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded-md h-[42px] flex justify-center mt-2 sm:mt-0 items-center"
      onClick={props.getYourLocationWeather}
    >
      <FaMapMarkerAlt />
    </button>
  );
}

export default ButtonLocation;
