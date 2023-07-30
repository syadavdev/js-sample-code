const app = require("express")()
jobs = {}

app.get("/checkstatus/:jobId", async (req, res) => {
    const jobId = req.params.jobId
    while(await checkJobComplete(jobId) == false);
    res.send(`\n JobId: ${jobId} is completed. \n\n`)
})

app.post("/submit", async (req, res) => {
    const jobId = `JobId:${Date.now()}`
    jobs[jobId] = 0
    update(jobId, 0)
    console.log(`Job: ${jobId} is submitted`)
    res.send(`\n Job:  ${jobId} \n`)
})

async function checkJobComplete(jobId){
    return new Promise((resolve, reject) => {
        if(jobs[jobId] < 100)
            this.setTimeout(() => resolve(false), 1000)
        else
            resolve(true)
    })
}

function update(jobId, prg){
    jobs[jobId] = prg
    console.log(`updated ${jobId} to ${prg}`)
    if(prg == 100)
        return
    this.setTimeout(() => {
        update(jobId, prg + 1)
    }, 3000);
}

app.listen(8081, () => console.log("listenning 8081") )