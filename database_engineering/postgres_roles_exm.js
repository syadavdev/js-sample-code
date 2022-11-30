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

const createPool = new Pool({
    "host": "localhost",
    "port": 5432,
    "user":"uCreate",
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

    const results = await readPool.query("select id, name from todo")
    
    console.table(results.rows)

    res.send({"rows": results.rows })

})

app.post("/create/:url", async (req, res) => {

    const url = req.params.url

    const results = await createPool.query("insert into todo(name) values($1)", [url])
    
    console.table(results.rows)

    res.send({"rows": results.rows })
    
})

app.delete("/delete/:urlId", async (req, res) => {

    const urlId = req.params.urlId

    const results = await deletePool.query("delete from todo where id = $1",[urlId])
    
    console.table(results.rows)

    res.send({"rows": results.rows })
    
})

app.listen(8081, () => console.log("listening on 8081"))