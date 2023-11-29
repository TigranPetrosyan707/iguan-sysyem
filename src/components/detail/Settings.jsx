import { useState } from "react";
import styles from "./detail.module.css";

const Settings = ({ data }) => {
  const [selectedColors, setSelectedColors] = useState({
    Header: "",
    Main: "",
    Footer: "",
  });

  const [isChecked, setIsChecked] = useState({
    Header: false,
    Main: false,
    Footer: false,
  });

  const handleColorClick = (section, color) => {
    setSelectedColors((prevSelectedColors) => ({
      ...prevSelectedColors,
      [section]: color,
    }));
  };

  const handleChange = (section, value) => {
    setIsChecked((prevValue) => ({
      ...prevValue,
      [section]: value,
    }));
  };

  return (
    <>
      {data.map((setting) => {
        return (
          <section key={setting.id} className={styles.sectionStyle}>
            <span>{setting.sectionName}</span>

            {isChecked[setting.sectionName] && (
              <>
                <div
                  className={`${styles.purple} ${
                    selectedColors[setting.sectionName] === "purple"
                      ? styles.active
                      : null
                  }`}
                  onClick={() =>
                    handleColorClick(setting.sectionName, "purple")
                  }
                />
                <div
                  className={`${styles.orange} ${
                    selectedColors[setting.sectionName] === "orange"
                      ? styles.active
                      : null
                  }`}
                  onClick={() =>
                    handleColorClick(setting.sectionName, "orange")
                  }
                />
                <div
                  className={`${styles.gray} ${
                    selectedColors[setting.sectionName] === "gray"
                      ? styles.active
                      : null
                  }`}
                  onClick={() => handleColorClick(setting.sectionName, "gray")}
                />
              </>
            )}

            <input
              type="checkbox"
              onChange={(e) => {
                handleChange(setting.sectionName, e.target.checked);
              }}
            />
          </section>
        );
      })}
    </>
  );
};

export default Settings;
