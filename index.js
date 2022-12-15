const { register, readFile } = require('./operaciones.js')

const arguments = process.argv.slice(2);

const selectFunction = (operacion) => {
    if (operacion === "registrar") {
        register(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
    }
    else if (operacion === "leer") {
        readFile()
    }
    else {
        console.log("you need to register the patiente")
    }
}
selectFunction(arguments[0]);
