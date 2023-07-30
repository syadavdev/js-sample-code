const app = require("express")()
jobs = {}

app.get("/checkstatus/:jobId", async (req, res) => {
    const jobId = req.params.jobId
    res.send(`\n JobId: ${jobId} progress ${jobs[jobId]}% \n\n`)
})

app.post("/submit", async (req, res) => {
    const jobId = `JobId:${Date.now()}`
    jobs[jobId] = 0
    update(jobId, 0)
    console.log(`Job: ${jobId} is submitted`)
    res.send(`\n Job:  ${jobId} \n`)
})

function update(jobId, prg){
    jobs[jobId] = prg
    console.log(`Job: ${jobId} is updated to ${prg}`)
    if(prg == 100)
        return
    this.setTimeout(() => {
        update(jobId, prg + 10)
    }, 3000);
}

app.listen(8081, () => console.log("listenning 8081") )