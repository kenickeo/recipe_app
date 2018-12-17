
import React, { Component } from 'react';
import { postRecipe } from '../actions/index.js';
import { updateRecipe } from '../actions/index.js';
import {connect} from 'react-redux';
import $ from "jquery";

class RecipeEntry extends Component {
   constructor(props){
     super(props);

     this.state = { 

                   Ingredients: '',
                   Instructions: '',
                   Recipe: '',
                   editRecipe: undefined,
                   editIngredients: undefined,
                   editInstructions: undefined
                   
                   };

this.sendRecipe = this.sendRecipe.bind(this);
this.updateRecipe = this.updateRecipe.bind(this);
this.updateIngredients = this.updateIngredients.bind(this);
this.updateInstructions = this.updateInstructions.bind(this);
this.clearInput = this.clearInput.bind(this);

   }


idsArray(){



var getIDS = _.map(this.props.recipes, (data) => {


  return data._id;

});

 return getIDS;


}

recipesArray(event){

var getRecipes = _.map(this.props.recipes, (data) => {


  return data.Recipe;

});

 return getRecipes;


 
}

ingredientsArray(event){

var getIngredients = _.map(this.props.recipes, (data) => {


  return data.Ingredients;

});

 return getIngredients;


 
}

instructionsArray(event){

var getInstructions = _.map(this.props.recipes, (data) => {


  return data.Instructions;

});

 return getInstructions;


 
}

editRecipe(setRecipes, setID, getIDS){

     var activeID = Number;
    
  if(setRecipes === undefined){

    
   console.log('loading');


  }else if (this.props.recipeAllowValueUpdate == true){

   return this.state.editRecipe;

  }else if ( this.props.addState == true ) {


    activeID = setRecipes[ getIDS.length - 1 ];

  
    return activeID;

  } else if (setRecipes != undefined && setID == null){
       
 activeID = setRecipes[0];
 
  return activeID;


  } else if (setID !== null){
    
    activeID = setRecipes[getIDS.indexOf(setID)];

  return activeID;
  
} 
}

editIngredients(setIngredients, setID, getIDS){
    
    var ingredients = [];
  if(setIngredients === undefined){

    
   console.log('loading');


  }else if (this.props.ingredientsAllowValueUpdate == true){


   return this.state.editIngredients;

  }else if ( this.props.addState == true ) {

for(var i = 0; i < setIngredients[ getIDS.length - 1 ].length; i++){

  if(i !== setIngredients[ getIDS.length - 1 ].length-1){

          ingredients = ingredients + setIngredients[ getIDS.length - 1 ][i] + '/';

      } else {

         ingredients = ingredients + setIngredients[ getIDS.length - 1 ][i];

    }

   }
    
   return ingredients;
  

  } else if (setIngredients != undefined && setID == null){
       
 for(var i = 0; i < setIngredients[0].length; i++){

  if(i !== setIngredients[0].length-1){

          ingredients = ingredients + setIngredients[0][i] + '/';

      } else {

         ingredients = ingredients + setIngredients[0][i];

    }

   }
   
   return ingredients;

  } else if (setID !== null){
    for(var i = 0; i < setIngredients[ getIDS.indexOf(setID)].length; i++){

  if(i !== setIngredients[ getIDS.indexOf(setID) ].length-1){

          ingredients = ingredients + setIngredients[ getIDS.indexOf(setID) ][i] + '/';

      } else {

         ingredients = ingredients + setIngredients[ getIDS.indexOf(setID) ][i];

    }

   }
    
   return ingredients;
   
} 

 
}



editInstructions(setInstructions, setID, getIDS){

  var instructions = [];

  if(setInstructions === undefined){

    
   console.log('loading');


  }else if (this.props.instructionsAllowValueUpdate == true){


   return this.state.editInstructions;

  }else if ( this.props.addState == true ) {

for(var i = 0; i < setInstructions[ getIDS.length - 1 ].length; i++){

  if(i !== setInstructions[ getIDS.length - 1 ].length-1){

          instructions = instructions + setInstructions[ getIDS.length - 1 ][i] + '/';

      } else {

         instructions = instructions + setInstructions[ getIDS.length - 1 ][i];

    }

   }
    
   return instructions;
  

  } else if (setInstructions != undefined && setID == null){
       
 for(var i = 0; i < setInstructions[0].length; i++){

  if(i !== setInstructions[0].length-1){

          instructions = instructions + setInstructions[0][i] + '/';

      } else {

         instructions = instructions + setInstructions[0][i];

    }

   }
    
   return instructions;

  } else if (setID !== null){
    for(var i = 0; i < setInstructions[ getIDS.indexOf(setID)].length; i++){

  if(i !== setInstructions[ getIDS.indexOf(setID) ].length-1){

          instructions = instructions + setInstructions[ getIDS.indexOf(setID) ][i] + '/';

      } else {

         instructions = instructions + setInstructions[ getIDS.indexOf(setID) ][i];

    }

   }
    
   return instructions;
   
} 


   }

convert(string){

  var list = string.split('/');

 return list;

}

updateRecipe(event){

if(this.props.edit == true && this.props.edit != false){


this.setState({editRecipe: event.target.value});
this.props.recipeValueUpdate(true);

}else {

this.setState({Recipe: event.target.value});

}


}

updateIngredients(event){

if(this.props.edit == true && this.props.edit != false){


this.setState({editIngredients: event.target.value});
this.props.ingredientsValueUpdate(true);

}else {

this.setState({Ingredients: event.target.value});

}


  
}

updateInstructions(event){

if(this.props.edit == true && this.props.edit != false){

this.setState({editInstructions: event.target.value});
this.props.instructionsValueUpdate(true);

} else{

this.setState({Instructions: event.target.value});

}


  
}


sendRecipe(event){

  event.preventDefault();
  
  if(this.state.Recipe != '' && this.state.Ingredients != '' && this.state.Instructions != '' ){
    
    var Recipe = this.convert(this.state.Recipe);
    var Ingredients = this.convert(this.state.Ingredients);
    var Instructions = this.convert(this.state.Instructions);

    var packRecipe = { Recipe: Recipe, Ingredients: Ingredients, Instructions: Instructions };
   
    this.props.postRecipe( packRecipe );

    this.props.addStatus( true );

    this.setState({Recipe: '', Ingredients: '', Instructions: ''});
    this.props.recipeValueUpdate(false);
    this.props.ingredientsValueUpdate(false);
    this.props.instructionsValueUpdate(false);
    setTimeout('window.history.back()', 100);  

     
    
         
} else if (this.props.edit == true && this.props.edit != false ){

    var id = Number;
    
    console.log(this.props.recipeAllowValueUpdate);
    console.log(this.editRecipe(this.recipesArray(), this.props.id, this.idsArray()));
    var Recipe = this.editRecipe(this.recipesArray(), this.props.id, this.idsArray());
    var Ingredients = this.convert(this.editIngredients(this.ingredientsArray(), this.props.id, this.idsArray()));
    var Instructions =  this.convert(this.editInstructions(this.instructionsArray(), this.props.id, this.idsArray()));
    
    if ( this.props.addState == true ) {

    id = this.idsArray()[this.idsArray().length - 1];

  } else if (this.recipesArray() != undefined && this.props.id == null){
       
     id = this.idsArray()[0];

  } else if (this.props.id !== null){

     id = this.props.id;

  }

    var packRecipe = { Recipe: Recipe, Ingredients: Ingredients, Instructions: Instructions };
    
     this.props.updateRecipe( id, packRecipe );

    this.setState({Recipe: '', Ingredients: '', Instructions: ''});
    this.props.recipeValueUpdate(false);
    this.props.ingredientsValueUpdate(false);
    this.props.instructionsValueUpdate(false);
    setTimeout('window.history.back()', 100); 

    

}


}

clearInput(){

this.setState({Instructions: '', Recipe: '', Ingredients: ''})

}

render(){
   
   var entryType = this.props.edit ? 'Edit Recipe' : 'Add Recipe';

 return (
        
  <div id ='something' className = 'modal' >
           
   <div className="modal-dialog">
    <div className="modal-content">
      <header className="container topclr">   
<i className = 'fa fa-info-circle' ><span className="tooltiptext">In order to create list items, include a “/” between list items.  Ex. unsalted butter/1 lemon</span></i><a href="#" className="closebtn" onClick = {this.clearInput}>×</a>
        <h2>{entryType}</h2>
      </header>
      <div className="container">
       <form className = 'list-group' onSubmit = {this.sendRecipe}>
          <label >Recipe</label> 
          <input type = 'text' className = 'input-list list-group list-group-item' value = {this.props.edit ? this.editRecipe(this.recipesArray(), this.props.id, this.idsArray()): this.state.Recipe} onChange = {this.updateRecipe} />
          
          <label >Ingredients</label> 
          <input type = 'text' className = 'input-list list-group list-group-item' value = {this.props.edit ? this.editIngredients(this.ingredientsArray(), this.props.id, this.idsArray()) : this.state.Ingredients} onChange = {this.updateIngredients} />
         
          <label >Instructions</label> 
          <textarea type = 'text' className = 'input-list list-group list-group-item' value = {this.props.edit ? this.editInstructions(this.instructionsArray(), this.props.id, this.idsArray()) : this.state.Instructions} onChange = {this.updateInstructions}></textarea>
          
         <footer className = "container">
         <a href = '#'></a>
       <button type = 'submit' className = 'btn btn-primary'>Save</button>
         <a href = '#' className = 'btn btn-danger' id = 'end' onClick = {this.clearInput} >Cancel</a>
         </footer>
       
      </form>
      </div>
    </div>
  </div>
 </div>

       	);

	}
}

function mapStateToProps(state){

return { recipes: state.recipes };

}

export default connect(mapStateToProps, { postRecipe, updateRecipe } )(RecipeEntry);

