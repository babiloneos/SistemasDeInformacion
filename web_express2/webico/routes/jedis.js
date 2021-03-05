var express = require('express');
var router = express.Router();

// Aqui van las rutas y metodos
// '/' se refiere a http://localhost:3000/campeones
router.get('/', (req, res, next) => {
  res.render('jedis',{nombre:'Jedis', rango:'', cantidad:'15000'});
});

router.get('/master',(req, res, next)=>{
  res.render('master_page',{nombre:'Master Jedi', rango:'4', cantidad:'500'});
});

module.exports = router;
