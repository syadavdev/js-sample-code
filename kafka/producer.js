const Kafka = require("kafkajs").Kafka

const msg = process.argv[2]
run()
async function run(){

    try{

        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": ["DESKTOP-H1G2SFO:9092"]
        })

        const producer = kafka.producer()
        console.log("Connecting...")
        await producer.connect()
        console.log("Connected")
        const partition = msg[0] < "N" ? 0 : 1
        const result = await producer.send({
            "topic": "Users",
            "messages": [
                {
                    "value": msg,
                    "partition": partition
                }
            ]
        })
        console.log("Send Successfully! : " + JSON.stringify(result))
        producer.disconnect()

    }catch(ex){
        console.log(`Exception : ${ex}`)
    }finally{
        process.exit()
    }

}