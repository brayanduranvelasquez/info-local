import modifiedAxios from '../interceptors/axios.interceptor';

export class ApiService {
  public async get(url: string, data?: any) {
    const params = new URLSearchParams(data);
    const dataParse = JSON.stringify(data);

    const { data: response } = await modifiedAxios(url, {
      params,
      data: dataParse,
    });

    return response;
  }

  public async getById(url: string, id: number | string) {
    // this id param can be number or string, because it can be a uuid.

    const urlConcated = `${url}/${id}`;
    const { data: response } = await modifiedAxios.get(urlConcated);

    return response;
  }
}
