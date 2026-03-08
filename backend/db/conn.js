const mongoose = require("mongoose")
require("dotenv").config()

mongoose.set("strictQuery", true)

async function main() {

  await mongoose.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.ts5gja1.mongodb.net/memories?retryWrites=true&w=majority`
  )

  console.log("Conectado com sucesso!")
}

main().catch((err) => console.log(err))

module.exports = main