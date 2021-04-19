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

function deleteAlumnoByNumCta(nc){
  Alumno.findOneAndDelete({numeroCuenta:nc},function(err,data){
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}

function main() {
  deleteAlumnoByNumCta("55555555");
}

main(); // ejecutamos main
