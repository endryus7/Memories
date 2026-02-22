const Memory = require("../models/Memory")

const createMemory = async(requestAnimationFrame, res) => {
    res.json("Deu certo!")
}

module.exports = {
    createMemory,
}