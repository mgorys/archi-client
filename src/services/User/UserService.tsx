import axios, { type AxiosResponse } from "axios";
import React, { useContext, useState } from "react";
import {
  UserRoleStatusEnum,
  type LoginRequest,
  type LoginResponse,
  type LoginResult,
  type UserDetails,
} from "./UserTypes";
import Settings from "../../config/Settings";

type ProviderProps = {
  children: React.ReactNode;
};

const Context = React.createContext<any>({});
export const useUserStorage = () => useContext(Context);

export const UserProvider: React.FC<ProviderProps> = (props: ProviderProps) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const value = {
    userDetails,
    updateUserDetails: setUserDetails,
    removeUser: () => setUserDetails(null),
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

const UserService = () => {
  const { userDetails, updateUserDetails, removeUser } = useUserStorage();

  function retrieveUser() {
    let storedUserData = localStorage.getItem("user");
    const retrievedUser: UserDetails = {
      userName: "",
      role: UserRoleStatusEnum.Unauthorized,
    };
    let shouldUpdate = true;
    if (!localStorage.getItem("user")) {
      logout();
      shouldUpdate = false;
    }

    if (storedUserData && shouldUpdate) {
      const userData = JSON.parse(storedUserData);

      for (const key in userData) {
        if (userData.hasOwnProperty(key)) {
        }
        if (key === "userName") {
          retrievedUser.userName = userData[key];
        }
        if (key === "role") {
          retrievedUser.role = userData[key];
        }
        if (key === "token") {
          retrievedUser.token = userData[key];
        }
      }
    }
    if (userDetails?.userName !== retrievedUser.userName) {
      updateUserDetails(retrievedUser);
    }
  }
  async function authenticate(
    loginRequest: LoginRequest,
  ): Promise<LoginResult> {
    const apiUrl = Settings.apiUrl + "account/login";
    const loginParams = {
      email: loginRequest.email,
      password: loginRequest.password,
    };
    console.log(apiUrl);
    try {
      const axiosResponse: AxiosResponse<LoginResponse> = await axios.post(
        apiUrl,
        loginParams,
      );
      let user = {
        userName: loginRequest.email,
        token: axiosResponse.data.token,
        role: UserRoleStatusEnum.Admin,
      };
      updateUserDetails(user);
      localStorage.setItem("user", JSON.stringify(user));
      return {
        responseStatus: axiosResponse.status,
        response: axiosResponse,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          return {
            responseStatus: error.response?.status,
            message: error.response?.data,
          };
        }
      }

      throw error;
    }
  }

  function logout() {
    localStorage.removeItem("user");
    removeUser();
  }
  return {
    retrieveUser,
    authenticate,
    logout,
  };
};
export default UserService;
