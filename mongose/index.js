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
    numeroCuenta: "223344"
  });

  alum.save(function(err, data) {
    if (err) {
      console.log("------------------------ERROR --------------------------");
    } else {
      console.log("--------------------------OK ---------------------------");
    }
  });
}


function main() {
  nuevoAlumno();
}

main(); // ejecutamos main
