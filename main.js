$(document).ready(function(){
	initDate();
});

function initDate(){
	var date = new Date();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var year = date.getFullYear();
	var today = new Date(year, month, day);
	compareDates(today);
}

var electionDates = {
	 "presElectionDate" : {"name": "Presidential Election Date", "date": new Date(2016, 04-01, 19)},
	 "presRegistrationDate" : {"name": "Presidential Registration Date","date":new Date(2016,03-01,25)},
	 "fedElectionDate" : {"name": "Federal Election Date","date":new Date(2016,06-01,28)},
	 "fedRegistrationDate" : {"name": "Federal Registration Date","date":new Date(2016,06-01,03)}
}

function compareDates(today){
	for(var i in electionDates){
		var diff = new Date( electionDates[i].date- today);
		var name = electionDates[i].name;
		var days = diff/1000/60/60/24;
		
		$('#content').append("<li>The "+name+" is "+days+" away!</li>");
	}
}