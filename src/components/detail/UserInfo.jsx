import Settings from "./Settings";
import { settingsData } from "./consts";
import styles from "./detail.module.css";

const UserInfo = (data) => {
  return (
    <div className={styles.profileStyle}>
      <div className={styles.profileInfoStyle}>
        <h4>{data.name}</h4> | <p>{data.email}</p>
      </div>
      <div className={styles.settingsStyle}>
        <p>Click on checkbox to select colors</p>
        <Settings data={settingsData} />
      </div>
    </div>
  );
};

export default UserInfo;
