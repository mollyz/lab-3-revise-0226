var SearchAreaController =function(view, model){

	view.dishDisplay.click(function(){
		// var id = $("view.dishDisplay").attr('id');
		var id = view.dishDisplay.attr("id");
		model.setSelectedDishId(id);
		$("#searchArea").hide();
		$("#detailView").show();
	});
	
}