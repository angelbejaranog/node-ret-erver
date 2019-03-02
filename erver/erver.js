require('./config/config.js');
const express = require('express');
const app = express();


const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/uurio', function (req, res) {
  res.json('get uurio');
})
 
 app.post('/uurio', function (req, res) {
 	let body = req.body;

 	if(body.nombre === undefined){
 		res.status(400).json({
 			ok: false,
 			menje: 'error '
 		})
 	}else{
 		res.json({
			body
		});
 	}	
})

 app.put('/uurio/:id', function (req, res) {
     
     let id = req.params.id;

  res.json({
  	id
  });
})

 app.delete('/uurio', function (req, res) {
  res.json('delete uurio');
})
 
app.listen(process.env.PORT, () => console.log('Ecuchndo puerto ', process.env.PORT));