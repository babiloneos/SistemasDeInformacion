var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibroSchema =  Schema({
    autor: {
        primer: String,
        paterno: String,
        materno: String
      },
      titulo: String,
      genero: String,
      edicion: Number,
      editorial: String,
      numPags: Number,
      sinopsis: String
    
  });
  
  module.exports = mongoose.model('Libro', LibroSchema);
  