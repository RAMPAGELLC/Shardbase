const { Shardbase, ShardClient, ShardServer } = require("shardbase");
const shards = require("./shards.json");
let Shardbase = new Shardbase(shards, "SECURE_API_AUTH_TOKEN")

let MasterShardServer = new ShardServer(shards, "SECURE_API_AUTH_TOKEN", 0, 443); // Master Shard
let ShardServer = new ShardServer(shards, "SECURE_API_AUTH_TOKEN", 1, 443); // Shard 1
let ShardClient = new ShardClient();

ShardClient.select({
    limit: 1,
    columns: "*",
    where: {
        name: "JOHN"
    },
    in: "users"
});

ShardClient.update({
    limit: 1,
    columns: {
        name: "JOHN-2"
    },
    where: {
        name: "JOHN"
    },
    in: "users"
});

ShardClient.delete({
    limit: 1,
    where: {
        name: "JOHN-2"
    },
    in: "users"
});

ShardClient.insert({
    columns: {
        name: "JOHN-2"
    },
    in: "users"
});