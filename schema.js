//importar mongoose

var mongoose = require('mongoose');

//ESQUEMA

module.exports = new mongoose.Schema({
curp:{
    type:String,
    required:true,
    length:18,
    match:'/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/'
},
nombre:{
    type:String,
    required:true
},
email:{
    type:String,
    match:'/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i',
    length:320,
    required:true
},
password:{
    type:String,
    match:'/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;',
    required:true
},
/*
PASSWD
Minimo 8 caracteres
Maximo 15
Al menos una letra mayúscula
Al menos una letra minucula
Al menos un dígito
No espacios en blanco
Al menos 1 caracter especial
*/
edad:{
    type:Number
},
fechaNac:{
    type:Date,
    required:false
},
domicilioCalle:{
    type:String,
    required:true
},
cp:{
    type:String
}

});