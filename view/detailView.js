var DetailView = function (container, model, identifier) {
	this.backToSelectButton = container.find("#backToSelectButton");
	this.confirmDishButton = container.find("#confirmDishButton");
  
	var detailDish= model.getDish(identifier);
	var dishIngredients=detailDish.ingredients;
   	console.log(detailDish);
    var ingredientHtml = "";
    var dishHtml="";

    for (i = 0; i < dishIngredients.length; i++) { 
		ingredientHtml += "<div class='col-md-2'>"+dishIngredients[i].quantity+" "+dishIngredients[i].unit
							+"</div><div class='col-md-6'>"+dishIngredients[i].name
							+"</div><div class='col-md-2'>SEK</div><div class='col-md-2'>"
							+dishIngredients[i].price+"</div>";

   }
   dishHtml="<h2>"+detailDish.name+"</h2><img src='./images/"
   			+detailDish.image+"'><p>"
   			+detailDish.description
   			//+"</p><br><button onclick='backtoselect();'>Back to Select Dish</button>";
    ;
   
	
	
	$("#detailDish").html(dishHtml);
	$("#ingredientTable").html(ingredientHtml);
	$("#ingredientTotal").html(model.getPriceForDish(detailDish));	
}
