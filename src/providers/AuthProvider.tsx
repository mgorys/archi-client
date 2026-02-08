import { createContext, useContext, useState, useEffect } from "react";
import type { UserDetails } from "../types/UserDetails";
import { UserRoleStatusEnum } from "../types/UserRoleStatusEnum";
import { jwtDecode } from "jwt-decode";
import type { LoginRequest } from "../types/LoginRequest";
import type { LoginResponse, LoginResult } from "../types/LoginResult";
import Settings from "../config/Settings";
import type { AxiosResponse } from "axios";
import axios from "axios";

type AuthState = {
  user: UserDetails | null;
  role: UserRoleStatusEnum;
  isAuthenticated: boolean;
};

type AuthContextType = {
  auth: AuthState;
  login: (user: UserDetails) => void;
  logout: () => void;
  authenticate: (loginRequest: LoginRequest) => Promise<LoginResult>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserDetails | null>(null);

  // restore session
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const payload = jwtDecode<{
          role: UserRoleStatusEnum;
          userName: string;
        }>(token);
        setUser({ userName: payload.userName, role: payload.role });
      }
    };
    fetchUser();
  }, []);

  const login = (user: UserDetails) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  async function authenticate(
    loginRequest: LoginRequest,
  ): Promise<LoginResult> {
    const apiUrl = Settings.apiUrl + "Auth/login";
    const loginParams = {
      email: loginRequest.email,
      password: loginRequest.password,
    };
    try {
      const axiosResponse: AxiosResponse<LoginResponse> = await axios.post(
        apiUrl,
        loginParams,
      );
      const user = {
        userName: loginRequest.email,
        token: axiosResponse.data.token,
        role: UserRoleStatusEnum.Admin,
      };
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      return {
        responseStatus: axiosResponse.status,
        response: axiosResponse,
      };
    } catch (error) {
      //TODO
      throw error;
    }
  }

  const role = user?.role ?? UserRoleStatusEnum.Unauthorized;

  return (
    <AuthContext.Provider
      value={{
        auth: {
          user,
          role,
          isAuthenticated: !!user,
        },
        login,
        logout,
        authenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
