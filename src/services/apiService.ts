import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { axiosConfig } from '../configs/api/axios';

class ApiService {
  private _api: AxiosInstance;

  constructor() {
    this._api = axios.create(axiosConfig);
  }

  public get<ResponseDataType, Response = AxiosResponse<ResponseDataType>>(url: string, config?: AxiosRequestConfig): Promise<Response> {
    return this._api.get(url, config);
  }

  public post<ResponseDataType, BodyType, Response = AxiosResponse<ResponseDataType>>(url: string, data: BodyType, config?: AxiosRequestConfig): Promise<Response> {
    return this._api.post(url, data, config);
  }

  public put<ResponseDataType, BodyType, Response = AxiosResponse<ResponseDataType>>(url: string, data: BodyType, config?: AxiosRequestConfig): Promise<Response> {
    return this._api.put(url, data, config);
  }

  public getFile(url) {
    return axios.get(
      'https://localhost:44315/api' + url,
      {
        headers: {
          'Content-type': 'application/json'
        },
        responseType: 'blob'
      },
    );
  }

}

export default new ApiService();
