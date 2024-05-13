import { TRequestApi } from "@/types/utils";
import { api } from "./api";

const queryParams = (params: any) => {
  return `?${Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&")}`;
};

export const requestApi = async ({
  contentType = "json",
  method,
  endpoint,
  body,
  params,
}: TRequestApi) => {
  try {
    const newParams = params ? queryParams(params) : "";
    const response = await api(contentType)[method](
      `${endpoint}${newParams}`,
      body
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
