console.log('Starting app.js');

const _ = require('lodash');
const yargs = require('yargs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const phonebook=require('./phonebook');

const argv=yargs.argv;
var input=process.argv[2];
var in2=process.argv[3];
//console.log(process.argv);
//console.log(argv);


if (input==='add')
{
	//console.log("add");
	phonebook.add(argv.name, argv.number, argv.group);
}

else if ( input==='remove')
{
	//console.log("remove");
	phonebook.remove(argv.name);
}

else if (input === 'displayAll')
{
	//console.log("display All");
	phonebook.displayAll();
}
else if (input === 'viewGroups')
{
	phonebook.viewGroups(group);
}
else if (input === 'contactSummary')
{
	phonebook.contactSummary(name);
}
else 
{
	console.log("invalid command");
}



/*

input

node app.js add --name="Manu" --number="9782777000" --group="me"
node app.js remove --name="Man"
node app.js displayAll


C:\Program Files\MongoDB\Server\4.0\bin>mongod --dbpath D:\projects\smol\Phonebook_nodejs\mongo-data
*/