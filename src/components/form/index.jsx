import { Link } from "react-router-dom";
import Input from "./Input";
import styles from "./form.module.css";

const Form = ({ data, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <div className={styles.containerStyle}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputsStyle}>
          {data.inputs.map((input) => (
            <Input key={input.id} {...input} />
          ))}
        </div>
        <div className={styles.linkStyle}>
          <Link to={data.link}>
            <button>{data.linkButtonText}</button>
          </Link>
        </div>
        <div className={styles.submitContainerStyle}>
          <button type="submit">{data.submitButtonText}</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
