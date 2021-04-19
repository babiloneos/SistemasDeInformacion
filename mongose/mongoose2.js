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

function findAlumnoPorNumCta(nc){
  Alumno.find({numeroCuenta:nc},function(err,documentos){
    console.log(documentos);
  });
}

function findByNombre(nom){
  Alumno.find({'nombre.primer':nom},function(err,documentos){
    console.log(documentos);
  });
}

function cambiarNombre(numcta, nuevoNombre){
  Alumno.findOneAndUpdate({numeroCuenta:numcta},{'nombre.primer':nuevoNombre},function(err,data){
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}

function main() {
  findAlumnoPorNumCta("22222222");
  console.log("---------------------------");
  findByNombre("Sarah");
  console.log("---------------------------");
  cambiarNombre("33333333", "Alejandro");
}

main(); // ejecutamos main
