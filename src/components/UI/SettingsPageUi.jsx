import React from 'react';

/**
 * Functional component representing the UI for settings page.
 * @param {object} props - The props passed to the component.
 * @param {object} props.settings - The settings object.
 * @param {boolean} props.settings.showSunset - Flag indicating whether to show sunset time.
 * @param {boolean} props.settings.showHumidity - Flag indicating whether to show humidity.
 * @param {boolean} props.settings.showPerceivedTemp - Flag indicating whether to show perceived temperature.
 * @param {Function} props.toggleSetting - Function to toggle a setting.
 * @param {Function} props.handleSaveSettings - Function to handle saving settings.
 * @param {boolean} props.buttonDisabled - Flag indicating whether the save button is disabled.
 * @returns {JSX.Element} SettingsPageUi component JSX
 */
function SettingsPageUi(props) {
  return (
    <div className="w-11/12 sm:w-1/2">
      <ul className="px-5 text-sm font-medium text-gray-900 bg-[#e5e7ebc4] border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {/* Sunset time setting */}
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="my-5 flex items-center">
            <label className="relative inline-block w-16 h-9 rounded-full">
              <input
                type="checkbox"
                className="peer opacity-0 w-0 h-0"
                id="showSunset"
                checked={props.settings.showSunset}
                onChange={() => props.toggleSetting('showSunset')}
                value=""
              />
              <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-500 rounded-full duration-300 before:content-[''] before:absolute before:w-7 before:h-7 before:bottom-1 before:left-1 before:rounded-full before:bg-white before:duration-300 peer-checked:before:translate-x-7 peer-checked:bg-blue-500"></span>
            </label>
            <label
              htmlFor="showSunset"
              className="text-sm font-bold text-gray-900 dark:text-gray-300 ml-3"
            >
              Show Sunset Time
            </label>
          </div>
        </li>

        {/* Humidity setting */}
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="my-5 flex items-center">
            <label className="relative inline-block w-16 h-9 rounded-full">
              <input
                type="checkbox"
                id="showHumidity"
                className="peer opacity-0 w-0 h-0"
                checked={props.settings.showHumidity}
                onChange={() => props.toggleSetting('showHumidity')}
                value=""
              />
              <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-500 rounded-full duration-300 before:content-[''] before:absolute before:w-7 before:h-7 before:bottom-1 before:left-1 before:rounded-full before:bg-white before:duration-300 peer-checked:before:translate-x-7 peer-checked:bg-blue-500"></span>
            </label>
            <label
              htmlFor="showHumidity"
              className="text-sm font-bold text-gray-900 dark:text-gray-300 ml-3"
            >
              Show Humidity
            </label>
          </div>
        </li>

        {/* Perceived temperature setting */}
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="my-5 flex items-center">
            <label className="relative inline-block w-16 h-9 rounded-full">
              <input
                type="checkbox"
                id="showPerceived"
                className="peer opacity-0 w-0 h-0"
                checked={props.settings.showPerceivedTemp}
                onChange={() => props.toggleSetting('showPerceivedTemp')}
                value=""
              />
              <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-500 rounded-full duration-300 before:content-[''] before:absolute before:w-7 before:h-7 before:bottom-1 before:left-1 before:rounded-full before:bg-white before:duration-300 peer-checked:before:translate-x-7 peer-checked:bg-blue-500"></span>
            </label>
            <label
              htmlFor="showPerceived"
              className="text-sm font-bold text-gray-900 dark:text-gray-300 ml-3"
            >
              Show Perceived Temperature
            </label>
          </div>
        </li>
      </ul>

      {/* Save settings button */}
      <button
        onClick={props.handleSaveSettings}
        className={`bg-blue-500 text-white py-2 px-4 rounded-md mt-3 ${
          props.buttonDisabled ? 'cursor-not-allowed opacity-50' : ''
        }`}
        disabled={props.buttonDisabled}
      >
        Apply Settings
      </button>
    </div>
  );
}

export default SettingsPageUi;
