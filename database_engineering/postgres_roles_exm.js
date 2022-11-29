const app = require("express")()
const { Pool } = require("pg")

const readPool = new Pool({
    "host": "localhost",
    "port": 5432,
    "user":"uRead",
    "password" : "postgres",
    "database" : "postgres",
    "max": 10
})

const updatePool = new Pool({
    "host": "localhost",
    "port": 5432,
    "user":"uUpdate",
    "password" : "postgres",
    "database" : "postgres",
    "max": 10
})

const deletePool = new Pool({
    "host": "localhost",
    "port": 5432,
    "user":"uDelete",
    "password" : "postgres",
    "database" : "postgres",
    "max": 10
})

app.get("/readAll", async (req, res) => {

    const results = await readPool.query("select url, url_id from url_table")
    
    console.table(results.rows)

    res.send({"rows": results.rows })

})

app.post("/create", async (req, res) => {

    const results = await readPool.query("insert into url_table(url, url_id) values($1, $2)", [url])
    
    console.table(results.rows)

    res.send({"rows": results.rows })
    
})

app.delete("/delete/:urlId", async (req, res) => {

    const urlId = req.params.urlId

    const results = await readPool.query("delete from url_table where id = $1",[urlId])
    
    console.table(results.rows)

    res.send({"rows": results.rows })
    
})

app.listen(8081, () => console.log("listening on 8081"))