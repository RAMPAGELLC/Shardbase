import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

class Http {
    token: string;

    constructor() {
        this.token = undefined;
    }

    setToken(token: string) {
        this.token = token;
    }

    async request(verb: any, url: any, payload: any, withHeaders?: boolean, callback?: (arg0: any) => any) {
        if (!this.token) return new Error('No token set');

        let response = await axios({
            method: verb,
            url: url,
            headers: {
                Authorization: `Bearer ${this.token};`
            },
            data: payload
        });

        if (callback) {
            return await callback(response.data);
        } else {
            if (withHeaders) return { data: response.data, headers: response.headers };
            return response.data;
        }
    }
}

export { Http };