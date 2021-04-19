//index.js
var mongoose = require('mongoose');
var fs = require('fs');
var Alumno = require('./models/alumnos.js');

const credentials = fs.readFileSync('/home/guillermob/CertMongoose.pem');
mongoose.connect('mongodb+srv://cluster0.8q7ty.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority',{
  sslKey: credentials,
  sslCert: credentials,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a Mongo DB Atlas')
}). catch( err => console.log(err));

function nuevoAlumno() {
  var alum = Alumno({
    numeroCuenta: "11111111",
    nombre: {
      primer: "Guillermo",
      paterno: "Ballesteros",
      materno: "Lopez"
    },
    semestre: 9,
    promedio: 9.78
  });

  alum.save(function(err, data) {
    if (err) {
      console.log("------------------------ERROR --------------------------");
    } else {
      console.log("--------------------------OK ---------------------------");
    }
  });
}

function nuevosAlumnos() {

  var alumnos=[
    { numeroCuenta: "11111112",nombre: {primer: "Guillemro", paterno: "Ballesteros", materno: "Lopez" },semestre: 9, promedio: 9.78},
    { numeroCuenta: "22222222",nombre: {primer: "Juan", paterno: "Reyes", materno: "Silva" },semestre: 9, promedio:8.2},
    { numeroCuenta: "33333333",nombre: {primer: "Alex", paterno: "Reyes", materno: "Ramirez" },semestre: 9, promedio: 8.9},
    { numeroCuenta: "44444444",nombre: {primer: "Itzel", paterno: "Perez", materno: "Marin" },semestre: 8, promedio: 8.2},
    { numeroCuenta: "55555555",nombre: {primer: "Sarah", paterno: "Martinez", materno: "Caos" },semestre: 10, promedio: 9.2},

  ];


  Alumno.collection.insert(alumnos,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

function main() {
  //nuevoAlumno();
  nuevosAlumnos();
}

main(); // ejecutamos main
