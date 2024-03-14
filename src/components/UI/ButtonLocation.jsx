

/**
 * ButtonLocation component renders a button with a map marker icon for triggering location-based actions.
 * @param {Object} props - Component props
 * @param {Function} props.getYourLocationWeather - Function to fetch weather based on user's location
 * @returns {JSX.Element} ButtonLocation component
 */
function ButtonLocation(props) {
  return (
    <button
      className="bg-[#e5e7ebc4] text-white py-2 px-4 rounded-md h-[42px] flex justify-center mr-5 items-center"
      onClick={props.getYourLocationWeather}
    >
      <i className="fa-solid fa-location-dot text-white font-bold"></i>
    </button>
  );
}

export default ButtonLocation;
