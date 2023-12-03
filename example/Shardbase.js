const { ShardClient, ShardServer } = require("shardbase");
const shards = require("./shards.json");

let ShardServer = new ShardServer(0, true);
let Shardbase = new ShardClient(shards);

ShardServer.listen(443);

Shardbase.select({
    limit: 1,
    columns: "*",
    where: {
        name: "JOHN"
    },
    in: "users"
});

Shardbase.update({
    limit: 1,
    columns: {
        name: "JOHN-2"
    },
    where: {
        name: "JOHN"
    },
    in: "users"
});

Shardbase.delete({
    limit: 1,
    where: {
        name: "JOHN-2"
    },
    in: "users"
});

Shardbase.insert({
    columns: {
        name: "JOHN-2"
    },
    in: "users"
});