import BaseService from "./base-service";

const commonHeaders = {
  "Content-Type": "application/json",
};

/**
 * Fetches the list of users from the backend API.
 * 
 * This function sends a GET request to the `/users/` endpoint
 * using the `BaseService` Axios instance. The response will contain
 * the user data from the server.
 * 
 * @returns {Promise<any>} A promise that resolves to the list of users or an error.
 */
export function getUsers(): Promise<any> {
  return BaseService.get("/users/", { headers: commonHeaders });
}
