//Imports de los módulos
const fs = require("fs/promises");
const path = require("path")
const readFileUsers = async() => {
     const pathFile = path.resolve(__dirname, 'users.json')
    let data = await fs.readFile(pathFile,"utf8")
    
};

const writeHelloWorld = () => {
    //Escribir hello world! en el archivo hello.txt
    const pathFile = path.resolve(__dirname, 'hello.txt')
      fs.writeFile(pathFile, "hello world!", (error) => {
        if(error){
            console.log("No se ha podido escribir en este archivo");
        }
    });

    

};

const addUser = async (username) => {
    const pathFile = path.resolve(__dirname, 'users.json')
    let data = await fs.readFile(pathFile,"utf8")
    let newData=await JSON.parse(data)
    newData.push(username)
    data = JSON.stringify(newData)
    console.log(data)
    fs.writeFile(pathFile,data, (error) => {
        if(error){
            console.log("No se ha podido escribir en este archivo");
        }
    });
};

//No hace falta ejecutar las funciones

module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};
