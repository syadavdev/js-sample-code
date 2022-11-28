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

app.get("/read", async (req, res) => {

    const results = await readPool.query("select * from news limit 1000")
    
    console.table(results.rows)

    res.send({"rows": results.rows })

})

app.get("/update/:urlId", async (req, res) => {

    const urlId = req.params.urlId

    const results = await readPool.query("select * from news limit 1000")
    
    console.table(results.rows)

    res.send({"rows": results.rows })
    
})

app.listen(8081, () => console.log("listening on 8081"))