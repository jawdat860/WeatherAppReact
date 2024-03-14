import { Link, Outlet } from 'react-router-dom';

/**
 * Functional component representing the layout for rendering routes.
 * @returns {JSX.Element} OutLelt component JSX
 */
function OutLelt() {
  return (
    <div className="bg-app-bg min-h-screen">
      {/* Navigation bar */}
      <nav className="bg-[#e5e7ebc4] p-[10px] sm:p-4 flex flex-row items-center">
        {/* Weather App title */}
        <h1 className="text-white font-bold lg:text-2xl">
          <Link to="WeatherAppReact" className="font-bold text-white">Weather App</Link>
        </h1>
        <div className="flex-1 flex justify-end gap-4 items-center">
          {/* Navigation links */}
          <Link to="WeatherAppReact" className="font-bold hover:text-white text-[13px] lg:text-[16px]">Home</Link>
          <Link to="settings" className="font-bold hover:text-white text-[13px] lg:text-[16px]">Settings</Link> {/* Link to the settings page */}
          <Link to="history" className="font-bold hover:text-white text-[13px] lg:text-[16px]">History</Link> {/* Link to the history page */}
        </div>
      </nav>
      {/* Render nested routes */}
      <>
        <Outlet />
      </>
    </div>
  );
}

export default OutLelt;
