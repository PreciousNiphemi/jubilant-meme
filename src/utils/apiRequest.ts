import axios, { AxiosResponse, Method } from "axios";

export type ApiResponseVariant = "success" | "error";

interface ApiResponse {
  variant: ApiResponseVariant;
  data?: any;
  error?: any;
}

export const apiRequest = async (
  url: string,
  method: Method,
  data?: object
): Promise<ApiResponse> => {
  const fullUrl = `https://conference-api.onrender.com${url}`;
  try {
    const response: AxiosResponse = await axios({ url: fullUrl, method, data });
    const variant =
      response.status >= 200 && response.status < 300
        ? ("success" as ApiResponseVariant)
        : ("error" as ApiResponseVariant);
    const apiResponse: ApiResponse = { variant, data: response.data };
    return apiResponse;
  } catch (error: unknown) {
    const variant = "error" as ApiResponseVariant;
    const apiResponse: ApiResponse = { variant, error: error };
    return apiResponse;
  }
};
