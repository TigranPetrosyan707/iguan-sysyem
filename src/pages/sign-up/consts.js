import userIcon from "../../assets/images/auth/nickname.png";
import emailIcon from "../../assets/images/auth/email.png";
import passwordIcon from "../../assets/images/auth/password.png";

export const signUpData = {
  inputs: [
    {
      id: 1,
      type: "text",
      name: "name",
      placeholder: "Name",
      icon: userIcon,
      altText: "user",
    },
    {
      id: 2,
      type: "email",
      name: "email",
      placeholder: "Email",
      icon: emailIcon,
      altText: "email",
    },
    {
      id: 3,
      type: "password",
      name: "password",
      placeholder: "Password",
      icon: passwordIcon,
      altText: "password",
    },
  ],
  link: "/login",
  linkButtonText: "Have an account? Log in",
  submitButtonText: "Sign Up",
};
