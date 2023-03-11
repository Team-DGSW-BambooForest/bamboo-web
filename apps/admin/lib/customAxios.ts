import axios from "axios";
import { SERVER } from "../config/config.json";

export const customAxios = axios.create({
  baseURL: SERVER,
  timeout: 10000,
});
