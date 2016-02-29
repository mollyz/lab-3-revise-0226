//DinnerModel Object constructor
var DinnerModel = function() {
	var menu = [];
	numberOfGuests = 1; 
	this.selectedDishId= 1;//set default number of guests
	
	menu['starter'] =1;
	var observers = []; //set a starter to the menu, to use for testing

	

	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu
	
	   this.notifyObservers = function (obj){
        for (var i = 0; i < observers.length; i++)
        {
            observers[i].update(obj);
        }
    }

    this.addObserver = function (observer) {
        observers.push(observer);
    }
    

	this.setNumberOfGuests = function(num) {
		
			numberOfGuests = num;
			this.notifyObservers();
			
			//TODO Lab 2
		
	}

	//ok
	// should return 
	this.getNumberOfGuests = function() {
			//console.log(numberOfGuests);
			return numberOfGuests;
	}
	
    this.setSelectedDishId = function(id){
    	this.selectedDishId = id;
    	this.notifyObservers("selectedDishId");
    }

	this.getSelectedDishId = function(){
    	return this.selectedDishId;
    }
	//function that returns a dish of specific ID
	//ok
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}

	//Returns the dish that is on the menu for selected type 
	//ok
	this.getSelectedDish = function(type) {
			var selectedDish = [];
			for (key in menu){
				var dish = this.getDish(menu[key]);
				if(dish.type==type){
					selectedDish.push(dish);
				}
			
			}
				return menu[type];//TODO Lab 2

	}
	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  //console.log("hi");
	  return $(dishes).filter(function(index,dish) {
		
		var found = true;
		if(filter){
			found = false;
			$.each(dish.ingredients,function(index,ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}

	  	return dish.type == type && found;
	  })	
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		var menuDishes = [];
		for(key in menu) {
			menuDishes.push(this.getDish(menu[key]));
		}
		return menuDishes;//TODO Lab 2
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var ingredients = [];
		for(key in menu) {
			var dish = this.getDish(menu[key]);
			ingredients = ingredients.concat(dish.ingredients);
		}
		return ingredients//TODO Lab 2
	}

	this.getPriceForDish = function(dish) {
        var totalPrice = 0;
        dish.ingredients.forEach(function(ingredient) {
        	totalPrice += ingredient.price;
        });
        //console.log(totalPrice);
        return totalPrice;

    };

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var ingredients = this.getAllIngredients();
		var sum = 0.;
		for(key in ingredients) {
			sum += parseFloat(ingredients[key].price) * this.getNumberOfGuests();
		}
		return sum;//TODO Lab 2
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		var type;
        var newDish;

        for (var i = 0; i < dishes.length; i++) {
            if (dishes[i].id == id) {
                type = dishes[i].type;
                newDish = dishes[i];
            }
        }

        for (var j = 0; j < menu.length; j++) {
            if (menu[j].type == type)
                menu.splice(j, 1);
        }
        menu.push(newDish);
        this.notifyObservers();//TODO Lab 2 
	}


	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
	  for (var i = 0; i < menu.length; i++) {
            dish = menu[i];
            if (dish.id == id)
                menu.splice(i, 1);
        }
        this.notifyObservers();
		}
};
	//will get the total price for the dish as argument, for one person.
    

	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'starter 1',
		'type':'starter',
		'image':'starter1.jpeg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. ",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'starter 2',
		'type':'starter',
		'image':'starter2.jpeg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'starter 3',
		'type':'starter',
		'image':'starter3.jpeg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':4,
		'name':'starter 4',
		'type':'starter',
		'image':'starter4.jpeg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':5,
		'name':'starter 5',
		'type':'starter',
		'image':'starter5.jpeg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];



