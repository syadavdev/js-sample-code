const app = require("express")()

app.get("/get", async (request, response) => {
    response.send("Hello from get call")
})


app.get("/stream", async (request, response) => {
    response.setHeader("Content-Type", "text/event-stream")
    send(response)
})

let i = 0
function send(response){
    response.write(`data: ${i++} \n\n`)
    this.setTimeout(() => send(response), 1000)
}

app.listen(8081, () => console.log("listening 8081"))