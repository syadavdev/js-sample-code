const http = require("http")
const httpserver = http.createServer();
httpserver.on("request", (req, res) => res.end(`OK from 4`))
httpserver.on("listening", () => {
    console.log(`listenig on port ${httpserver.address().port} address ${httpserver.address().address}`)
})
httpserver.on("error", (err) => console.log(`error : ${err}`))
httpserver.listen(8888, "127.0.0.1")

httpserver6 = http.createServer();
httpserver6.on("request", (req, res) => res.end(`OK from 6`))
httpserver6.on("listening", () => {
    console.log(`listenig on port ${httpserver6.address().port} address ${httpserver6.address().address}`)
})
httpserver6.on("error", (err) => console.log(`error : ${err}`))
httpserver6.listen(8888, "::1")