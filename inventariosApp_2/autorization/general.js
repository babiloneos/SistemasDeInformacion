var express = require('express');
const rutaAutorizada = express.Router();
var jwt = require('jsonwebtoken');


rutaAutorizada.use( (req, res, next)=>{
  var token = req.session.token;
  var clave= process.env.SECRETO;
  if( token ){
    jwt.verify(token, clave, ( err, decoded )=>{
      if(err) res.json({mensaje:"Token invalido."});
      if(decoded) next();
    } );
  } else {
    res.json({mensaje:"No hay token, favor de volver a hacer login"});
  }
} );


module.exports = rutaAutorizada;
