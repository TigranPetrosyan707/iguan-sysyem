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
        <p>
          Click on checkbox to select colors and click on Approve changes button
        </p>
        <Settings data={settingsData} userID={data.id} />
      </div>
    </div>
  );
};

export default UserInfo;
