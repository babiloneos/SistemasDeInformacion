//index.js
var mongoose = require('mongoose');
const fs = require('fs');
var Libro = require('./models/libro.js');
var Schema = mongoose.Schema;

const credentials = fs.readFileSync('/home/guillermob/CertMongoose.pem');
mongoose.connect('mongodb+srv://cluster0.8q7ty.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority',{
  sslKey: credentials,
  sslCert: credentials,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a Mongo DB Atlas');
}). catch( err => console.log(err));

function nuevoLibro(){
  var libr = Libro({
    autor: {
      primer: "Julio",
      paterno: "Verne",
      materno: ""
    },
    titulo: "La vuelta al mundo en ochenta dias",
    genero: "Novela",
    edicion: 2,
    editorial: "EMU",
    numPags: 139,
    sinopsis: "Philleas Fogg, un excentrico millonario, ha ofrecido la mitad de su fortuna si es incapaz d edarle la vuelta al planeta en ochenta dias."
  })

  libr.save(function(err, data){
    if(err){
      console.log("--------------- ERROR ---------------");
    } else {
      console.log("--------------- OK ---------------");
    }
  });
}

function main(){
  nuevoLibro();
}

main()