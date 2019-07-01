//importacion del modulo moongose
var moongoose = require('mongoose');
//importando moment
var moment = require('moment');
//importacion del schema de base de datos
var schema = require('./schema');

//Conexion y creacion de la base de datos
moongoose.connect('mongodb://localhost:27017/tarea7',function (err) {
 
    if (err) throw err;
  
    console.log('Conectado correctamente');
  
 });

 //MODELO

var Modelo = moongoose.model('Usuarios',schema,'UsuariosDoc');


var curp1='FICJ950926HNTGTN07';


var modelo = new Modelo({
    curp:curp1,
    nombre:'Juan Ramon Figueroa Cueto',
    email:'jurafigueroacu@ittepic.edu',
    password:'JuanFigueroa1$',
    edad:moment().diff(moment(curp1.substring(4,10),'YYMMDD').format("YYYYMMDD"),'years',false),
    fechaNac:moment(curp1.substring(4,10),'YYMMDD').format("YYYY-MM-DD"),
    domicilioCalle: 'Tepic',
    cp:'5632'
    

});

//Guardaremos el modelo en mongo
modelo.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.exit(0)
});