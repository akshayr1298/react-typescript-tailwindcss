import axios from "axios";
import { server } from "./server";

export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `${server}`, 
   });