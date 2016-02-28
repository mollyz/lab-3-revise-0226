var DetailViewController =function(view, model){
	
	view.backToSelectButton.click(function(){
		  $("#detailView").hide();
		  $("#searchArea").show();
	});

	view.confirmDishButton.click(function(){
		$("#detailView").hide();
		$("#searchArea").show();
		model.addDishToMenu(model.getSelectedDishId());
	});
}