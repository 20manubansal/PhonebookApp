const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true}, (err, client) => {
	var db = client.db('phonebookApp');

	if (err) 
		{
			return console.log("unable to connect", err);
		}
	console.log("connected");

	db.collection('contacts').find({name: 'Manu'}).toArray().then((docs) =>{
		console.log(JSON.stringify(docs, undefined, 2));
	});

	client.close();
	}); 