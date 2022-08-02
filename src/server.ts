import app from "../src/app.js"

const PORT: number = Number(process.env.PORT) || 4000
app.listen(PORT, () => console.log("The server is running on port " + PORT))