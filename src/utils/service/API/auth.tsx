import { axiosInstance } from "./axiosInstance";

/*login api */
type loginType = {
  email: string;
  password: string;
};
interface LoginResponse {
  status: number;
  data: any; 
}
export const login = async (data: loginType): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post("api/auth/signin", data);
    console.log("res", response);
    return response;
  } catch (error: any) {
    console.log("error",error);
    return error;
  }
};
