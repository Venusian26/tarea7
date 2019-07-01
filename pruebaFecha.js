var moment = require('moment');
//importacion del schema de base de datos


var curp = 'FICJ950926HNTGTN07';
var edad=moment().diff(moment(curp.substring(4,10),'YYMMDD').format("YYYYMMDD"),'years',false)
    
var edad1=moment(curp.substring(4,10),'YYMMDD').format("YYYY-MM-DD");
console.log('edad'+edad1);


