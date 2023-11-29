import styles from "./form.module.css";

const Input = (data) => {
  return (
    <div className={styles.inputStyle}>
      <img src={data.icon} alt={data.altText} />
      <input type={data.type} placeholder={data.placeholder} />
    </div>
  );
};

export default Input;
