const { ShardClient } = require("shardbase");
const shards = require("./shards.json");

let Shardbase = new ShardClient(shards);

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