const Kafka = require("kafkajs").Kafka

run()
async function run(){

    try{

        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": ["localhost:29093"]
        })

        const consumer = kafka.consumer({"groupId" : "test"})
        console.log("Connecting...")
        await consumer.connect()
        console.log("Connected")

        consumer.subscribe({
            "topic": "topic1",
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