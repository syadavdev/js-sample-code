const { Client } = require("pg")
const pgURL = "postgres://postgres:postgres@localhost:5432/postgres"
client = new Client(pgURL)

async function connect(client){
    try{
       await client.connect()
       console.log(`Client Connected.`)
       
       const result = await client.query("select * from url_table limit 10")

       console.table(result.rows);

       await client.end();
    }
    catch(ex){
        console.error(ex)
    }
    finally{

    }

}

connect(client)