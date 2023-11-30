import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import styles from "./form.module.css";

const Form = ({ data, onSubmit, error }) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles.containerStyle}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className={styles.inputsStyle}>
          {data.inputs.map((input) => (
            <Input
              key={input.id}
              data={input}
              value={inputs[input.name]}
              handleChange={handleChange}
            />
          ))}
        </div>
        {error && <span>{error}</span>}
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
