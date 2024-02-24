import React from 'react';

/**
 * SettingsPageUi component renders the settings page UI with checkboxes to toggle settings.
 * @param {Object} props - Component props
 * @param {Object} props.settings - Object containing settings state
 * @param {Function} props.toggleSetting - Function to toggle a specific setting
 * @param {Function} props.handleSaveSettings - Function to handle saving settings
 * @returns {JSX.Element} SettingsPageUi component
 */
function SettingsPageUi(props) {
  return (
    <>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Settings</h3>
      <ul className="w-full sm:w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="showSunset"
              checked={props.settings.showSunset}
              onChange={() => props.toggleSetting("showSunset")}
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="vue-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Show Sunset Time
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="showHumidity"
              checked={props.settings.showHumidity}
              onChange={() => props.toggleSetting("showHumidity")}
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="react-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Show Humidity
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="angular-checkbox"
              checked={props.settings.showPerceivedTemp}
              onChange={() => props.toggleSetting("showPerceivedTemp")}
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="angular-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {" "}
              Show Perceived Temperature
            </label>
          </div>
        </li>
      </ul>

      <button onClick={props.handleSaveSettings} className="bg-blue-500 text-white py-2 px-4 rounded-md mt-3">Save Settings</button>
    </>
  );
}

export default SettingsPageUi;
