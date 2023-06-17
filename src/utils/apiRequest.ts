import axios, { AxiosResponse, Method } from "axios";

interface ApiResponse {
  toast: boolean;
  data?: any;
}

export const apiRequest = async (
  url: string,
  method: Method,
  data?: object
): Promise<ApiResponse> => {
  const fullUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${url}`;
  try {
    const response: AxiosResponse = await axios({ url: fullUrl, method, data });
    const toast = response.status >= 200 && response.status < 300;
    const apiResponse: ApiResponse = { toast, data: response.data };
    return apiResponse;
  } catch (error: unknown) {
    const toast = false;
    const apiResponse: ApiResponse = { toast };
    return apiResponse;
  }
};
