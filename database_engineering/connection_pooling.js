const app = require("express")()
const {Pool } = require("pg")

const pool = new Pool({
    "user": "postgres",
    "password" : "postgres",
    "host" : "localhost",
    "port" : 5432,
    "database" : "db_pooling",
    "max" : 20,
    "connectionTimeoutMillis" : 0,
    "idleTimeoutMillis" : 0
})

app.get("/all", async (req, res) => {
    const fromDate = new Date();

    const result = await pool.query("select * from news limit 100")

    const toDate = new Date()
    const elapsed = toDate - fromDate;
    res.send({"rows" : result.rows, "elapsed": elapsed, "method" : "pool"})
})

app.listen(8081, () => console.log("listenning 8081") )