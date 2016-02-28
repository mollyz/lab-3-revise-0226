var DinnerOverview = function (container, model) {

	//this.showList = container.find(".showList");
	//this.dinnerAll = container.find("#dinnerAll");

	var newDishes = model.getFullMenu();
   
    var html = "";
   
	for (i = 0; i < newDishes.length; i++) { 
		html += "<div class='floating-box2 RightAlign' ><div><img class='borderAll' src='./images/"+newDishes[i].image
					+"' alt='"+newDishes[i].name+"'></div><div class='textMiddle'>"+newDishes[i].name
					+"</div><div class='RightAlign' style='padding: 5px;'>"+model.getPriceForDish(newDishes[i])+" SEK</div>"; 
       console.log("TotalPrice for"+newDishes[i].name+"="+model.getPriceForDish(newDishes[i]));               
    }
	
	$("#dinnerAll").html(html);
	$("#printPrice").html("<h3>Total:</h3><h3>"+model.getTotalMenuPrice()+" SEK</h3>");
		
}
