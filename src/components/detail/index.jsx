import UserInfo from "./UserInfo";
import styles from "./detail.module.css";

const Details = ({ data }) => {
  return (
    <div className={styles.detailContainerStyle}>
      {data.map((user) => (
        <UserInfo key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Details;
