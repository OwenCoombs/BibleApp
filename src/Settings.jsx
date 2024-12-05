import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(true);
  const [fontSize, setFontSize] = useState("medium");

  const handleThemeToggle = () => {
    setDarkMode(!isDarkMode);
  };

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!isNotificationsEnabled);
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  return (
    <div className={`settings ${isDarkMode ? "dark-mode" : ""}`}>
      <h1 className="settings-title">Settings</h1>

      <div className="setting-item">
        <label className="setting-label">Dark Mode</label>
        <button className="toggle-button" onClick={handleThemeToggle}>
          {isDarkMode ? "Disable" : "Enable"}
        </button>
      </div>

      <div className="setting-item">
        <label className="setting-label">Daily Verse Notifications</label>
        <button className="toggle-button" onClick={handleNotificationsToggle}>
          {isNotificationsEnabled ? "Disable" : "Enable"}
        </button>
      </div>

      <div className="setting-item">
        <label className="setting-label">Font Size</label>
        <div className="font-buttons">
          <button
            className={`font-button ${fontSize === "small" ? "active" : ""}`}
            onClick={() => handleFontSizeChange("small")}
          >
            Small
          </button>
          <button
            className={`font-button ${fontSize === "medium" ? "active" : ""}`}
            onClick={() => handleFontSizeChange("medium")}
          >
            Medium
          </button>
          <button
            className={`font-button ${fontSize === "large" ? "active" : ""}`}
            onClick={() => handleFontSizeChange("large")}
          >
            Large
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
