const app = require("express")()
const { Client } = require("pg")
const ConsistentHash = require("consistent-hash")
const crypto = require("crypto")

const hr = new ConsistentHash()

hr.add("5432")
hr.add("5433")
hr.add("5434")

const clients = {
    "5432" : new Client({
        "user": "postgres",
        "password" : "postgres",
        "host" : "localhost",
        "port" : 5432,
        "database" : "postgres"
    }),
    "5433" : new Client({
        "user": "postgres",
        "password" : "postgres",
        "host" : "localhost",
        "port" : 5433,
        "database" : "postgres"
    }),
    "5434" : new Client({
        "user": "postgres",
        "password" : "postgres",
        "host" : "localhost",
        "port" : 5434,
        "database" : "postgres"
    })
}

connect();

async function connect() {
    await clients["5432"].connect();
    await clients["5433"].connect();
    await clients["5434"].connect();
}

app.get("/", (req, res) => {
    res.send({
        "ok" : 200
    })
})

app.post("/", (req, res) => {
    const url = req.query.url;

    const hash = crypto.createHash("sha256").update(url).digest("base64")
    const urlId = hash.substr(0, 5);

    res.send({
        "urlId" : urlId,
        
    })
})

app.listen(8081, () => console.log("listenning 8081") )