$(document).ready(function(){
	initDate();
});

function initDate(){
	var date = new Date();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var year = date.getFullYear();
	var today = new Date(year, month, day);
	var nameOfMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
	var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][date.getDay()];
	compareDates(today);
	headerMessage(nameOfMonth, dayOfWeek, day);
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
		if (days<=5){
			$('#content').append("<li style='color:purple'>The "+name+" is "+days+" away!</li>");
		} else if (days == 0){
			$('#content').append("<li style='color:red'>The "+name+" is TODAY!</li>");
		} else if (days >5){
			$('#content').append("<li>The "+name+" is "+days+" away!</li>");
		}
	}
}

$.getJSON("https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyA9K6_Ncl1Q0JQRphIMj6089vMqrTy4o9A", getData);

//AIzaSyA9K6_Ncl1Q0JQRphIMj6089vMqrTy4o9A
function getData (data) {
	var politics = data;
	for (var i in politics){
		console.log(politics[i]);
	}
}