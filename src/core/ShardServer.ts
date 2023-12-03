import Shardbase from "./Shardbase";
import express from 'express';

class ShardServer extends Shardbase {
    private port: Number = 443;
    private app: express.Express;
    private server: any;
    public ShardId: Number;

    constructor(Shards: JSON, AuthToken: string, ShardId: Number, Port: Number) {
        super(Shards, AuthToken);
        this.port = Port;
        this.ShardId = ShardId;
        this.listen()
    }

    private validateBearer(req) {
        let token = req.headers['x-access-token'] || req.headers['authorization'];
        token = token.replace(/^Bearer\s+/, "");
        return token == this.authToken;
    }

    private routes() {
        if (this.ShardId == 0) {
            this.app.post('/sb/api/master', (req, res) => {
                if (!this.validateBearer(req)) return res.send({ success: false, error: 0 });
                return res.send({ success: false });
            });
        } else {
            this.app.post('/sb/api/shard', (req, res) => {
                if (!this.validateBearer(req)) return res.send({ success: false, error: 0 });
                return res.send({ success: false });
            });
        }
    }

    private listen() {
        this.app = express();
        this.routes();
        this.server = this.app.listen(this.port, () => {
            console.log(`ShardServer server is listening on port ${this.port}.`);
        });
    }
}

export default ShardServer;