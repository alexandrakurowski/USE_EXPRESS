console.log("hello"); 

$("#ok").click(function(){

var login= $("#login").val();
var mdp = $ ("#mdp").val();
console.log(login);
console.log(mdp);

	/* recupere donnees dans fichier json*/
	 $.ajax({
	 	method:'POST',// cad ce que l'on veur faire avec les données AJAX/ ici le poster
	 	url : '/', // la direction pour poster ajax
	 	data: {monlogin:login ,monmdp:mdp},
	 	
	 	 }).done(function(reponse) {
	   		 alert( reponse );
	   		location.href='myaccount.html';//redirige vers une nouvelle page
	    

	 	 }).fail(function() {
	    	alert( reponse );
	    

	 	 }).always(function() {
	    console.log('complete');

	    });
	  
});

