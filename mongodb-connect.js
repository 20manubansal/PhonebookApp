const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true}, (err, client) => {
	var db = client.db('phonebookApp');

	if (err) 
		{
			return console.log("unable to connect", err);
		}
	console.log("connected");



	db.collection('contacts').insertOne({
		name:'Manu',
		number: '9782777000',
		group: 'me',
		completed: false
	},(err, result)=> {
		if (err) {
			return console.log("error", err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	})

	client.close();
	}); 