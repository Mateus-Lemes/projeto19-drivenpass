import app from "./app.js";
var PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, function () { return console.log("The server is running on port " + PORT); });
