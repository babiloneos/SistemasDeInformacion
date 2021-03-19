var jwt = require('jsonwebtoken');

var payload={
  userdata:{'email':'joe@doe.com','phone':'5544332211', 'perfil':'user'}
};

const priv_key="dios1234"

const token = jwt.sign(payload, priv_key,{ expiresIn: 60*5 });

console.log(token);
