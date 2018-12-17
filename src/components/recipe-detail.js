import React, { Component } from 'react';
import {connect} from 'react-redux';
import { deletePost } from '../actions/index.js';
import _ from 'lodash';
import { postRecipe } from '../actions/index.js';
import axios from 'axios';


class RecipeDetail extends Component {
  constructor(props){
      super(props);
    
this.removePost = this.removePost.bind(this);
this.editClicked = this.editClicked.bind(this);
this.editRemoved = this.editRemoved.bind(this);

  }
  


showRecipe(setRecipes, setID){

 
    var activeID = Number;
    var count = 0;

  if(setRecipes === undefined){

    
   console.log('loading');


  } else if ( this.props.addState == true ) {


    activeID = setRecipes[ this.props.getIDS.length - 1 ];
   
    return activeID;

  } else if (setRecipes != undefined && setID == null){

 activeID = setRecipes[0];
 
  return activeID;


  } else if (setID !== null){
      
activeID = setRecipes[this.props.getIDS.indexOf(setID)];

  return activeID;
  
} 



}

showIngredients(setIngredients, setID){


var activeID = Number;
var count = 0;

  if(setIngredients === undefined){

    
   console.log('loading');


 } else if ( this.props.addState == true){


return setIngredients[ this.props.getIDS.length - 1].map((data) => {

 return (

          <li key = {count++}>{data}</li>

      );


});

} else if (setIngredients[0] != undefined && setID == null){
      
   
 return setIngredients[0].map((data) => {

 return (

          <li key = {count++}>{data}</li>

      );

  
});
 
 
  } else if (setID !== null){

return setIngredients[this.props.getIDS.indexOf(setID)].map((data) => {

 return (

          <li key = {count++}>{data}</li>

      );


});


  
    } 
  
}

showInstructions(setInstructions, setID){


var activeID = Number;
var count = 10;

  if(setInstructions === undefined){

    
   console.log('loading');


  } else if (this.props.addState == true ){

  
return setInstructions[ this.props.getIDS.length - 1].map((data) => {

 return (

          <li key = {count++}>{data}</li>

      );


});

} else if (setInstructions[0] != undefined && setID == null){
      
   
 return setInstructions[0].map((data) => {

 return (

          <li key = {count++}>{data}</li>

      );

  
});
 
 
  } else if (setID !== null){

return setInstructions[this.props.getIDS.indexOf(setID)].map((data) => {

 return (

          <li key = {count++}>{data}</li>

      );


});


  
  } 
 
}

removePost(){
  
 var idNum = Number;

if(this.props.Recipes === undefined){

    
   console.log('loading');


  } else if ( this.props.addState == true ) {


    
   
    var del = { Recipe: this.props.Recipes[this.props.getIDS.length - 1], Ingredients: this.props.Ingredients[this.props.getIDS.length - 1], Instructions: this.props.Instructions[this.props.getIDS.length - 1] };
     idNum = this.props.getIDS[this.props.getIDS.length - 1];
    this.props.returnID( this.props.getIDS[this.props.getIDS.length - 1]);

this.props.deletePost(idNum, del);


  } else if (this.props.Recipes != undefined && this.props.id == null){


 var del = { Recipe: this.props.Recipes[0], Ingredients: this.props.Ingredients[0], Instructions: this.props.Instructions[0] };
idNum = this.props.getIDS[0];
this.props.returnID( this.props.getIDS[1]);

this.props.deletePost(idNum, del);


  } else if (this.props.id !== null){
      
var del = { Recipe: this.props.Recipes[this.props.getIDS.indexOf(this.props.id)], Ingredients: this.props.Ingredients[this.props.getIDS.indexOf(this.props.id)], Instructions: this.props.Instructions[this.props.getIDS.indexOf(this.props.id)] };
idNum = this.props.id;
this.props.returnID( this.props.getIDS[this.props.getIDS.indexOf(idNum) - 1]);

this.props.deletePost(idNum, del);

} 

// var del = { Recipe: this.props.Recipes[this.props.getIDS.indexOf(this.props.id)], Ingredients: this.props.Ingredients[this.props.getIDS.indexOf(this.props.id)], Instructions: this.props.Instructions[this.props.getIDS.indexOf(this.props.id)] };
// var idNum = this.props.id;
// this.props.returnID( this.props.getIDS[this.props.getIDS.indexOf(idNum) - 1]);

// this.props.deletePost(idNum, del);

   var recipe = ['Perfect Roast Turkey', 'Shrimp Stir-Fry', 'Shrimp Lo Mein'];
   var ingredients = [['1_4 pound (1 stick) unsalted butter', '1 lemon, zested and juiced', '1 teaspoon chopped fresh thyme leaves', '1 fresh turkey (10 to 12 pounds) Kosher salt', 'Freshly ground black pepper', '1 large bunch fresh thyme', '1 whole lemon, halved', '1 Spanish onion, quartered', '1 head garlic, halved crosswise'], ['1 tablespoon butter', '1 tablespoon olive oil', '2 pounds jumbo shrimp, peeled and deveined, tails on', '4 cloves garlic, minced', '2 large zucchini, diced', '2 large ears of corn, kernels removed', '3_4 cup red grape tomatoes, sliced in half lengthwise', '3_4 cup yellow grape tomatoes, sliced in half lengthwise', 'Salt and freshly ground black pepper', '12 to 18 fresh basil leaves, cut in chiffonade', 'Parmesan shavings', 'Juice of 1 lemon', 'Rice or pasta, for serving, optional'], ['Salt', '8 ounces dried Chinese egg noodles, or 1 pound fresh', '1 packet chicken bouillon mix, such as Knorr, dissolved in 1 3/4 cups hot water', '1_4 cup plus 2 tablespoons oyster sauce', '3 tablespoons low-sodium soy sauce', '1 tablespoon sesame oil', '1 tablespoon Sriracha chili sauce', '2 tablespoons vegetable oil', '1 tablespoon minced garlic', '2 teaspoons minced ginger', '1 cup thinly sliced white button mushrooms', '2 stalks celery, thinly sliced', '1 large carrot, shredded', '1 small bunch scallions, white and green parts, sliced', '1 pound small shrimp, peeled and deveined', '1_4 head Napa cabbage, finely shredded', '2 tablespoons cornstarch']];
   var instructions = [['Preheat the oven to 350 degrees F.', 'Melt the butter in a small saucepan. Add the zest and juice of the lemon and 1 teaspoon of thyme leaves to the butter mixture. Set aside.', 'Take the giblets out of the turkey and wash the turkey inside and out. Remove any excess fat and leftover pinfeathers and pat the outside dry. Place the turkey in a large roasting pan. Liberally salt and pepper the inside of the turkey cavity. Stuff the cavity with the bunch of thyme, halved lemon, quartered onion, and the garlic. Brush the outside of the turkey with the butter mixture and sprinkle with salt and pepper. Tie the legs together with string and tuck the wing tips under the body of the turkey.', 'Roast the turkey about 2 1/2 hours, or until the juices run clear when you cut between the leg and the thigh. Remove the turkey to a cutting board and cover with aluminum foil; let rest for 20 minutes.', 'Slice the turkey and serve.'], ['Melt the butter with the olive oil in a large skillet over a medium-high heat. Add the shrimp and garlic, then saute until the shrimp are opaque, about 3 minutes. Remove the shrimp to a plate.', 'Increase the heat to high, then throw in the zucchini. Stir it around for about 45 seconds, then scoot the zucchini to the edges of the pan. Throw in the corn and cook it for a minute, then push it to the edges of the pan. Throw in the grape tomatoes, stir them around for a minute, then sprinkle on some salt and pepper to taste.', 'Then throw the shrimp back in. Stir everything around for about 45 seconds, or until it\'s all combined and hot. Then pour it onto a big platter.', 'Sprinkle on the fresh basil and some Parmesan shavings then ... this is the best part ... squeeze the lemon all over the top. This adds a wonderful, indescribable freshness.', 'You can serve this with rice, with pasta or it\'s just perfect on its own.'], ['For the noodles: In a large pot of salted boiling water, cook the noodles according to their package directions. Drain and set aside.', 'For the sauce: Combine the bouillon, oyster sauce, soy sauce, sesame oil and Sriracha in a large glass measuring cup or small bowl and set aside. This may look like a lot of sauce, but you have a lot of noodles and veggies to coat!', 'For the lo mein: Heat a wok over high heat. When hot, add 1 tablespoon vegetable oil, half the garlic, half the ginger and half the scallions and saute 30 seconds. Add in the shrimp and cook until they just start to turn pink and curl up, about 2 minutes. Transfer the shrimp and aromatics to a plate and reserve.', 'In the same pan, heat the remaining 1 tablespoon vegetable oil and add the remaining garlic, ginger and scallions. Saute 30 seconds, and then add in the mushrooms, celery, carrots and cabbage. Saute the veggies until they begin to brown and caramelize, 4 to 5 minutes.', 'Whisk the cornstarch into 2 tablespoons cold water. Once dissolved, add to the sauce. Add the sauce to the pan with the vegetables and bring to a simmer. Toss in the reserved shrimp, aromatics and noodles and serve!']];
  const ROOT_URL = 'https://rocky-hamlet-47219.herokuapp.com/recipes';
    
    var response = axios.get(`${ROOT_URL}`).then((response) => {

        console.log(response.data);

        if (response.data == null){

         for (var i = 0; i < recipe.length; i++){

      var initialRecipe = { Recipe: recipe[i], Ingredients: ingredients[i], Instructions: instructions[i] };
   console.log(initialRecipe);
      this.props.postRecipe( initialRecipe );
     
       
    }

    setTimeout('window.location.reload(true)', 100);

        }

    });
}

editClicked(){

this.props.clicked(true);

}

editRemoved(){

this.props.clicked(false);

}

	render(){

 

       return (

         
        <div className = 'recipe-view'>
          <h2 className = 'name'>{ this.showRecipe(this.props.Recipes, this.props.id)}<div className = 'rightside'><i className = 'fa fa-trash' onClick = {this.removePost}></i><a href = '#something'><i className = 'fa fa-edit' onClick = {this.editClicked} ></i></a></div></h2>
          <div className = 'recipe-detail'>
             <h4>Ingredients:</h4>
             <ul>
               {this.showIngredients(this.props.Ingredients, this.props.id)}
             </ul>

             <h4>Instructions:</h4>
                  <ol>
                     {this.showInstructions(this.props.Instructions, this.props.id)}
                  </ol>
          </div>
        
         <div className = 'add'><a href = '#something'> <i className = 'fa fa-plus-circle'onClick = {this.editRemoved} ></i></a></div>
         
       </div>

       	);

	}


}


export default connect(null, { deletePost, postRecipe })(RecipeDetail);
