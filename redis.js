const util = require("util");
const redis = require("redis");

const client = redis.createClient(process.env.KEYS);

// Promisify function
client.hget = util.promisify(client.hget);

// usage 
const cacheValue = await = client.hget(hashkey, key);
