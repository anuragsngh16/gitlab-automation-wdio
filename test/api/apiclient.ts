import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const token: string = "myToken";

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Sends a GET request to the specified endpoint with optional query parameters.
   *
   * @param endpoint - The API endpoint to send the request to.
   * @param params - Optional query parameters to include in the request.
   * @returns A promise that resolves to the Axios response.
   */
  async get(endpoint: string, params?: Record<string, any>): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    };
    return await axios.get(`${this.baseUrl}${endpoint}`, config);
  }

  /**
   * Sends a POST request to the specified endpoint with the provided data and optional query parameters.
   *
   * @param endpoint - The API endpoint to send the request to.
   * @param data - The payload to be sent in the body of the POST request.
   * @param params - Optional query parameters to include in the request.
   * @returns A promise that resolves to the Axios response.
   */
  async post(endpoint: string, data: any, params?: Record<string, any>): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    };
    const response = await axios.post(`${this.baseUrl}${endpoint}`, data, config);
    return response;
  }

  async delete(endpoint: string): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return await axios.delete(`${this.baseUrl}${endpoint}`, config);
  }
}