import dotenv from "dotenv"
import connectDB from "./db/index.js"
import app from "./app.js"

//get the port from env
const port = process.env.PORT || 4000

dotenv.config({
  path: "./env",
})

connectDB()
  .then(() => {
    app.listen(() => {
      console.log(`Server is listen on ${port}`)
    })
    app.on("error", (error) => {
      console.log("MONGO db connection failed", error)
    })
  })
  .catch((error) => {
    console.log("Server connection failed", error)
  })
