var TopBar= function(container, model) {
	var totalNum=container.find("#totalNum");
	this.update
	var totalHtml=("<h2>My Dinner: "+model.getNumberOfGuests()+" People.</h2>");
	console.log("!"+totalHtml);
	totalNum.html(totalHtml);
}