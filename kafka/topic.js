const Kafka = require("kafkajs").Kafka

run()
async function run(){

    try{

        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": ["DESKTOP-H1G2SFO:9092"]
        })

        const admin = kafka.admin()
        console.log("Connecting...")
        await admin.connect()
        console.log("Connected")
        await admin.createTopics({
            "topics": [{
                "topic": "Users",
                "numPartitions": 2
            }]
        })
        console.log("Created Successfully!")
        admin.disconnect()

    }catch(ex){
        console.log(`Exception : ${ex}`)
    }finally{
        process.exit()
    }

}