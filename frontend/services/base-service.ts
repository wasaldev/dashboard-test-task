import axios from "axios";

/**
 * Axios instance configured with a base URL from environment variables.
 * The base URL points to the backend API, making requests easier to manage
 * by centralizing the configuration in one place.
 * 
 * @type {import('axios').AxiosInstance}
 * @constant
 */
const BaseService = axios.create({
  baseURL: `${process.env.BACKEND_URL}/api`, // Dynamically set base URL from environment variable
});

export default BaseService;
