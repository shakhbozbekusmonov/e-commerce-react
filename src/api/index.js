import axios from "axios";
import { API_PATH } from "../utils/constants";

export const api = axios.create({
    baseURL: API_PATH,
});
