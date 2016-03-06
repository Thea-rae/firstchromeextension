$(document).ready(function(){

});


var votesmart = new VoteSmart();


// votesmart.BallotMeasure().measure(query, function (err, res) {
// 	if (err) throw err;
// 	else console.log(res);
// });

// votesmart.District().byZip(query, function (err, res) {
//   if (err) throw err;
//   else console.log(res);
// });

// votesmart.Office().branches(function (err, res) {
//   if (err) throw err;
//   else console.log(res);
// });
getElectionbyYear();
function getElectionbyYear(){
	var query = {
	"year": "current",
	"stateId":"NY"
};
votesmart.Election().electionByYearState(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
}

getCatID();
function getCatID(){
	var query = {
	"stateId":"NY"
};
	var catId;
	votesmart.Rating().categories(query, function (err, res) {
		if (err) throw err;
		else
		getSigList(res.categories.category);
	});
}

function getSigList(things){
	console.log(things);
	for (var i in things){
		var name = things[i].name;
		var categoryId = things[i].categoryId;
		console.log(name +" "+ categoryId);
	}
	var q ={
	}
}
// votesmart.Rating().sigList(query, function (err, res) {
//   if (err) console.log(err);
//   else console.log(res);
// });