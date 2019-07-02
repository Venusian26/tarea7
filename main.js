//importacion del modulo moongose
var moongoose = require('mongoose');
//importando moment
var moment = require('moment');
//importacion del schema de base de datos
var schema = require('./schema');

const sendmail = require("./sendmail");


//Conexion y creacion de la base de datos
moongoose.connect('mongodb://localhost:27017/tarea7', function (err) {

    if (err) throw err;

    console.log('Conectado correctamente');

});

//MODELO

var Modelo = moongoose.model('Usuarios', schema, 'UsuariosDoc');


var curp1 = 'FICJ960913HNTGTN07';


var modelo = new Modelo({
    curp: curp1,
    nombre: 'Juan Ramon Figueroa Cueto',
    email: 'deyaespinosaab@ittepic.edu.mx',
    password: 'JuanFigueroa1$',
    edad: moment().diff(moment(curp1.substring(4, 10), 'YYMMDD').format("YYYYMMDD"), 'years', false),
    fechaNac: moment(curp1.substring(4, 10), 'YYMMDD').format("YYYY-MM-DD"),
    domicilioCalle: 'Tepic',
    cp: '5632'
});

//Guardaremos el modelo en mongo
modelo.save(function (error) {
    if (error) {
        console.log(error);
        process.exit(1);
    } 
    console.log("Saved!!");
    //sendmail.send(envRegistro);
});

const envRegistro = {
    to: modelo.email,
    subject: "TAREA 07 - AE2019V",
    text: `Este es un mensaje que se "envio" a ${modelo.nombre}`,
    html: `<strong>Welcome to your new account!</strong>`
}

//LOGIN
Modelo.find({email:"jurafgueroacu@ittepic.edu",password:"1234"}, (error, docs) => {
    if (error) {
        console.log("<--------LOGIN--------->");
        console.log("Login inválido");
        console.log(error);
        process.exit(1);
    }
    console.log("<--------LOGIN--------->");
    console.log("Login válido");
    console.log(docs);
});

//Recuperar Password
Modelo.find({email:"deyaespinosaab@ittepic.edu.mx",fechaNac:"1996-09-13"}, (error, docs) => {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("<--------SEND PASSWORD--------->");
    sendmail.send(envPassword);
    console.log(docs);
});

const envPassword = {
    to: modelo.email,
    subject: "TAREA 07 - AE2019V",
    text: `Este es un mensaje que se "envio" a ${modelo.nombre}`,
    html: `<strong>The password is</strong> ${modelo.password}`
}