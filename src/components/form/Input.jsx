import styles from "./form.module.css";

const Input = ({ data, value, handleChange }) => {
  return (
    <div className={styles.inputStyle}>
      <img src={data.icon} alt={data.altText} />
      <input
        type={data.type}
        value={value}
        name={data.name}
        placeholder={data.placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
