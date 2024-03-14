import Cookies from 'js-cookie';
import React, { useState, useReducer, useEffect } from 'react';
import SettingsPageUi from '../UI/SettingsPageUi';

// Initial state for settings
const initialState = {
  showSunset: false,
  showHumidity: false,
  showPerceivedTemp: false,
};

// Reducer function to manage state changes for settings
function settingsReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_SETTING':
      return {
        ...state,
        [action.setting]: !state[action.setting],
      };
    case 'LOAD_SETTINGS':
      return action.settings;
    default:
      return state;
  }
}

/**
 * Functional component representing the settings page.
 * @param {object} props - The props passed to the component.
 * @param {Function} props.onSaveSettings - Function to handle saving settings.
 * @returns {JSX.Element} SettingsPage component JSX
 */
function SettingsPage({ onSaveSettings }) {
  // State management for settings
  const [settings, dispatch] = useReducer(settingsReducer, initialState);
  // State to manage settings retrieved from cookies
  const [cookieSettings, setCookieSettings] = useState(null);
  // State to manage button disable state based on changes
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Effect to load settings from cookies on component mount
  useEffect(() => {
    const settingsFromCookies = Cookies.get('setting');
    if (settingsFromCookies) {
      const parsedSettings = JSON.parse(settingsFromCookies);
      dispatch({ type: 'LOAD_SETTINGS', settings: parsedSettings });
      setCookieSettings(parsedSettings);
    }
  }, []);

  // Effect to compare current settings with settings from cookies
  useEffect(() => {
    if (cookieSettings !== null) {
      const isSameSettings = JSON.stringify(settings) === JSON.stringify(cookieSettings);
      setButtonDisabled(isSameSettings);
    }
  }, [settings, cookieSettings]);

  // Function to handle saving settings
  const handleSaveSettings = () => {
    onSaveSettings(settings);
    saveSettingsToCookies(settings);
    setCookieSettings(settings);
  };

  // Function to save settings to cookies
  const saveSettingsToCookies = (settings) => {
    Cookies.set('setting', JSON.stringify(settings), {
      sameSite: 'None',
      secure: true,
    });
  };

  // Function to toggle individual setting
  const toggleSetting = (setting) => {
    dispatch({ type: 'TOGGLE_SETTING', setting });
  };

  return (
    <div className="flex justify-center items-center flex-col py-10">
      {/* Render UI for settings page */}
      <SettingsPageUi
        settings={settings}
        toggleSetting={toggleSetting}
        handleSaveSettings={handleSaveSettings}
        buttonDisabled={buttonDisabled}
      />
    </div>
  );
}

export default SettingsPage;
