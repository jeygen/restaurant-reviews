import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express() // server

app.use(cors()) // middlemen
app.use(express.json()) 

app.use("/api/v1/restaurants", restaurants) // most routes in other file, this url is what people will go to
app.use("*", (req, res) => res.status(404).json({ error: "not found"})) // if they go elsewhere then error

export default app // export to file that will interact with database
