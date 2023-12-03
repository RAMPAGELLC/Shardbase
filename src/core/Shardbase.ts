import { Http, err } from '../util';

class Shardbase {
    public Shards: JSON;
    public http: Http;
    public authToken: string;

    constructor(Shards: JSON, AuthToken: string) {
        this.Shards = Shards;
        this.http = new Http();
        this.authToken = AuthToken;
        this.http.setToken(AuthToken);
    }

    async queryMaster(query: string) {
        return false;
    }
}

export default Shardbase;