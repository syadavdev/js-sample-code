const Kafka = require("kafkajs").Kafka

run()
async function run(){

    try{

        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": ["DESKTOP-H1G2SFO:9092"]
        })

        const consumer = kafka.consumer({"groupId" : "test"})
        console.log("Connecting...")
        await consumer.connect()
        console.log("Connected")

        consumer.subscribe({
            "topic": "Users",
            "fromBeginning": true
        })

        await consumer.run({
            "eachMessage": async result => {
                console.log(`RVD Msg ${result.message.value} on partition ${result.partition}`)
            }
        })

    }catch(ex){
        console.log(`Exception : ${ex}`)
    }finally{
        
    }

}