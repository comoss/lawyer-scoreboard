var express = require('express');
var app = express();
var Sequelize = require('sequelize');

var sequelize = new Sequelize('lawyer_scoreboard', 'root', null);

var Lawyer = sequelize.define('Lawyer', {
	Name: Sequelize.STRING,
	Location:Sequelize.STRING,
	Record: Sequelize.STRING,
	Hourly_Rate: Sequelize.INTEGER
});



sequelize
	.sync({ force:true})
	.complete(function(err) {
		if(!!err) {
			console.log('unable to connect to the database dude', err)
		}else{
			console.log('connection has been established successfully.')
		}
	});

	// sequelize.sync();

app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/public/app.js'));


var server = app.listen(3000, function(){
	console.log('listening on port #', server.address().port);

});