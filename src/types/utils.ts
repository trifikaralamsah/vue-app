export interface TRoutes {
  path: string;
  component: any;
  children?: any;
  name?: string;
}
export interface TRequestApi {
  contentType?: "json" | "formData" | undefined;
  method: "get" | "post" | "put" | "delete";
  endpoint: string;
  body?: any;
  params?: any;
}
