const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const client = new todoPackage.Todo("0.0.0.0:4000", grpc.credentials.createInsecure())

client.createTodo({
    "id" : -1,
    "text" : "sandeep"
}, (err, response) => {
    console.log(`recieve err ${JSON.stringify(err)} & response ${JSON.stringify(response)}`)
})