import Cookies from "js-cookie";
import React, { useReducer, useEffect } from "react";
import SettingsPageUi from "./UI/SettingsPageUi";

/**
 * Initial state for the settings reducer.
 * @type {object}
 */
const initialState = {
  showSunset: false,
  showHumidity: false,
  showPerceivedTemp: false,
};

/**
 * Reducer function to manage settings state.
 * @param {object} state - Current state.
 * @param {object} action - Action object.
 * @returns {object} New state after applying the action.
 */
function settingsReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SETTING":
      return {
        ...state,
        [action.setting]: !state[action.setting],
      };
    case "LOAD_SETTINGS":
      return action.settings;
    default:
      return state;
  }
}

/**
 * Component for managing settings.
 * @param {object} props - The props for the component.
 * @param {function} props.onSaveSettings - Function to handle saving settings.
 * @returns {JSX.Element} The JSX element for the settings page.
 */
function SettingsPage({ onSaveSettings }) {
  const [settings, dispatch] = useReducer(settingsReducer, initialState);

  /**
   * Load settings from cookies on page load.
   */
  useEffect(() => {
    const settingsFromCookies = Cookies.get("setting");
    if (settingsFromCookies) {
      dispatch({
        type: "LOAD_SETTINGS",
        settings: JSON.parse(settingsFromCookies),
      });
    }
  }, []);

  /**
   * Handles saving settings and updating cookies.
   */
  const handleSaveSettings = () => {
    onSaveSettings(settings);
    saveSettingsToCookies(settings);
  };

  /**
   * Saves settings to cookies.
   * @param {object} settings - The settings object.
   */
  const saveSettingsToCookies = (settings) => {
    Cookies.set("setting", JSON.stringify(settings), {
      sameSite: "None",
      secure: true,
    });
  };

  /**
   * Toggles a setting.
   * @param {string} setting - The setting to toggle.
   */
  const toggleSetting = (setting) => {
    dispatch({ type: "TOGGLE_SETTING", setting });
  };

  return (
    <div>
      <SettingsPageUi
        settings={settings}
        toggleSetting={toggleSetting}
        handleSaveSettings={handleSaveSettings}
      />
    </div>
  );
}

export default SettingsPage;
