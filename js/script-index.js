$(document).ready( function(){
$('.js-back').hide();
/*
*etapa1
*/


	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);


});
/*
*etapa2
*/
function printNews(){
	$('.callout-news p').append('nuevas recetas');
}

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
* ETAPA 3
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for (var i = 0; i < recipesArray.length; i++) {
		if (recipesArray[i].highlighted === true){
			renderRecipe(recipesArray[i]);
		}
	}
	
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
* ETAPA 4
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	var name = recipe.name
	var title = recipe.title
	var source = recipe.source.name
	$('.list-recipes').append('<a class="item-recipe" href="#">' +
  '<span class="attribution">' +
    '<span class="title-recipe"> ' + title + ' </span>' +
    '<span class="metadata-recipe">' +
      '<span class="author-recipe"> ' + source + ' </span>' +
      '<span class="bookmarks-recipe">' +
        '<span class="icon-bookmark"></span>' +
      '</span>' +
    '</span>' +
  '</span>' +

  '<img src="img/recipes/320x350/' + name + '.jpg"/>' +
'</a>')
}





/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


