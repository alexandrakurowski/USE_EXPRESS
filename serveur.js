var express = require ('express');
var bodyParser = require ('body-parser')
var app = express();

app.use(express.static('public'));


app.get ('/', function(req, res){
	res.send ('hello world !');
});

app.listen(3300, function(){
	console.log ('premier test');
});



app.use('/static', express.static(__dirname + '/public'));  //fichiers statiques doc express voir md
app.use(bodyParser.urlencoded({ extended: true })); // ! code oceane extended: false pas d'objets imbriques, true possibilite d'objets imbriques

var user = {

	login:'alex',
	mdp:'123',
}
//RECUPERE LES ID TAPES ET LES COMPARES
app.post('/', function (req, res) {
		console.log(req.body);
		console.log(user.login);
	 if (user.login === req.body.monlogin && user.mdp === req.body.monmdp){
	 	 	console.log(res.send);
	 	
		
		 res.send('vous etes identifié');
	}
	else{
	
	 	res.send('identifiants errones');
		console.log(res.send);
	}
	

});