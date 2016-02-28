var SearchArea = function (container, model) {

	//this.showList = container.find(".showList");
	this.selectDish = container.find("#selectDish");

	console.log(courseTemp);
	var myDishes = model.getAllDishes(courseTemp);
    
    var html = "";

	for (i = 0; i < myDishes.length; i++) { 
		html += "<div class='floating-box' ><div><img onclick='seedetail("+myDishes[i].id+");'class='borderAll' src='./images/"+myDishes[i].image
					+"' alt='"+myDishes[i].name+"'></div><div class='textMiddle'>"+myDishes[i].name
					+"</div><div style='padding: 5px;overflow: auto;'>"+myDishes[i].description+"</div></div>";
    }
	$("#showList").html(html);

	console.log("html="+html);
}

function changevalue(){
	courseTemp=$("#courseType").find('option:selected').val();
	SearchArea($("#searchArea"),model);
}