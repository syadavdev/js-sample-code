const mysql = require('mysql2/promise');

connectInnoDB();
connectMyISAM();
async function connectInnoDB(){

    try {
        const con = await mysql.createConnection({
            "host": "localhost",
            "port": 3307,
            "user": "root",
            "password": "root",
            "database": "test"
        })
       await con.beginTransaction();
       await con.query(
           "INSERT INTO emp_innodb (name) values (?)",
            ["Sandeep"])

       const [rows, schema] = await con.query(
           "select * from emp_innodb"
       )
       console.table(rows);

       await con.commit();
       await con.close();
       console.log(result)
    }
    catch(ex){
        console.error(ex)
    }
    finally{

    }

}

async function connectMyISAM(){

    try {
        const con = await mysql.createConnection({
            "host": "localhost",
            "port": 3307,
            "user": "root",
            "password": "root",
            "database": "test"
        })
       await con.beginTransaction();
       await con.query(
           "INSERT INTO emp_myisam (name) values (?)",
            ["Sandeep"])

        const [rows, schema] = await con.query(
            "select * from emp_myisam"
        )
        console.table(rows);
       
       await con.commit();
       await con.close();
       console.log(result)
    }
    catch(ex){
        console.error(ex)
    }
    finally{

    }

}
 