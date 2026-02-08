import { useState } from "react";
import LoginComponent from "./LoginComponent";

export const AuthPageStatusEnum = {
  Login: "Login",
  SignUp: "SignUp",
  Forgot: "Forgot",
} as const;

export type AuthPageStatusEnum =
  (typeof AuthPageStatusEnum)[keyof typeof AuthPageStatusEnum];

export const PublicAuthorizationPage = () => {
  const [authPageState, setAuthPageState] = useState<AuthPageStatusEnum>(
    AuthPageStatusEnum.Login,
  );
  const renderAuthComponent = () => {
    return <LoginComponent setAuthPageState={setAuthPageState} />;
  };

  return <>{renderAuthComponent()}</>;
};

export default PublicAuthorizationPage;
