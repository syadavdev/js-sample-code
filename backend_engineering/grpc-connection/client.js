const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const text = process.argv[2]
const client = new todoPackage.Todo("0.0.0.0:4000", grpc.credentials.createInsecure())

client.createTodo(
    {"id" : -1,
    "text" : text}, 
    (err, response) => {
        console.log(`recieve create Todo response : ${JSON.stringify(response)}`)
})

// client.readTodos({},
//     (err, response) => {
//         response.items.forEach(element => {
//             console.log("receive read todo from server : " + element.text) 
//     });
// })

const call = client.readTodosStream()
call.on("data", item => {
    console.log("received read Todo streams from server : " + JSON.stringify(item))
})

call.on("end", e => {
    console.log("server done!")
})