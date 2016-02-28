var SideNavViewController = function (view, model) {

	view.plusButton.click(function(){
		console.log("successfully click plus button");
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});

 
	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});

	view.confirmDinnerButton.click(function(){
		console.log("confirmDinnerButton");
		console.log("successfully clicked.")
		$("#SecondPage").hide();
		$("#topBar").show();
		$("#dinnerOverview").show();
	});

}