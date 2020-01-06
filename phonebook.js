//console.log('starting phonebook');

const fs=require('fs');

var getcontacts=function()
{
	try
	{
	var phonebook_data_string=fs.readFileSync('phonebook_data.json');
	return JSON.parse(phonebook_data_string);
	}
	catch(e)
	{
		return [];
	}

}



var add= function(name, number, group)
{
	var contacts=getcontacts();
	var person={name, number, group};

	contacts.push(person);

	fs.writeFileSync('phonebook_data.json', JSON.stringify(contacts));
	//console.log(contacts);
}


var remove= function(name)
{
	var contacts=getcontacts();
	
	var updatedContacts=contacts.filter(
		function(person)
		{
			return person.name!==name;
		});

	fs.writeFileSync('phonebook_data.json', JSON.stringify(updatedContacts));
	//console.log(updatedContacts);
}

var displayAll= function()
{
	var contacts=getcontacts();	
	console.log(contacts);
}

var viewGroups= function(group)
{
	var contacts=getcontacts();	
	console.log(contacts);
}
var contactSummary= function(name)
{
	var contacts=getcontacts();
	console.log(contacts);
}


module.exports={
	add, remove, displayAll
};