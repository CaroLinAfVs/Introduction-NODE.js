const fs = require('fs');

const register = (name, age, type, color, disease) => {

    const content = { name, age, type, color, disease }
    const reading = readFile("citas.json")
    reading.push(content)
    console.log(reading)
    fs.writeFileSync("citas.json", JSON.stringify(reading))

}

const readFile = (nameFile) => {
    const read = fs.readFileSync(nameFile)
    const objFile = JSON.parse(read)
    return objFile
}

module.exports = { register, readFile }