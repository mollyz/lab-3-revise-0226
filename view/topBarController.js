var TopBarController = function(view, model){
	view.backToEditMenuButton.click(function({
	$("#topBar").hide();
	$("#dinnerOverview").hide();
	$("#DinnerPreparation").hide();
	$("#SecondPage").show();
	$("#searchArea").show();
	$("#showList").show()
	}))
}