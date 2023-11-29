import emailIcon from "../../assets/images/auth/email.png";
import passwordIcon from "../../assets/images/auth/password.png";

export const loginData = {
  inputs: [
    {
      id: 1,
      type: "email",
      placeholder: "Email",
      icon: emailIcon,
      altText: "email",
    },
    {
      id: 2,
      type: "password",
      placeholder: "Password",
      icon: passwordIcon,
      altText: "password",
    },
  ],
  link: "/sign-up",
  linkButtonText: "Don't have an account? Sign up",
  submitButtonText: "Login",
};
