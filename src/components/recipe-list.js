import React, { Component } from 'react';
import { fetchRecipes } from '../actions/index.js';
import {connect} from 'react-redux';
import RecipeDetail from './recipe-detail';
import _ from 'lodash';
import RecipeEntry from './recipe-entry';


class RecipeList extends Component {

   constructor(props){
     super(props);

     this.state = {

                   Ingredients: [],
                   Instructions: [],
                   Recipe: '',
                   id: null,
                   edit: undefined,
                   addStatus: undefined,
                   recipeChangeEditValue: false,
                   ingredientsChangeEditValue: false,
                   instructionsChangeEditValue: false

                   };



   }




getIDS(){



var getIDS = _.map(this.props.recipes, (data) => {


  return data._id;

});

 return getIDS;


}

getRecipes(){



var getRecipes = _.map(this.props.recipes, (data) => {


  return data.Recipe;

});


 return getRecipes;


}

getIngredients(){



var getIngredients = _.map(this.props.recipes, (data) => {


  return data.Ingredients;

});

 return getIngredients;


}

getInstructions(){



var getInstructions = _.map(this.props.recipes, (data) => {


  return data.Instructions;

});

 return getInstructions;


}

showRecipes(){

var something = this.props.recipes;



return _.map(something, (data) => {

  
      return (

      <a  onClick = {event =>  event.target ? this.setState({ id: data._id, addStatus: false, recipeChangeEditValue: false, ingredientsChangeEditValue: false, instructionsChangeEditValue: false }): null }><li key = {data._id} className = 'list-group-item recipe' >{data.Recipe}</li></a>


  );
    
    
});


}



	render(){
   
   
   this.props.fetchRecipes();




       return (
         <div>
          <RecipeEntry id = {this.state.id} edit = {this.state.edit} recipeValueUpdate = {(data) => this.setState({recipeChangeEditValue: data})} ingredientsValueUpdate = {(data) => this.setState({ingredientsChangeEditValue: data})} instructionsValueUpdate = {(data) => this.setState({instructionsChangeEditValue: data})} recipeAllowValueUpdate = {this.state.recipeChangeEditValue} ingredientsAllowValueUpdate = {this.state.ingredientsChangeEditValue} instructionsAllowValueUpdate = {this.state.instructionsChangeEditValue} addStatus = {(data) => this.setState({addStatus: data})} addState = {this.state.addStatus} />
          <div  className = 'recipe-list'>
             <ul className = 'list-group'>
               {this.showRecipes()}
             </ul>
          </div>  
         
           <RecipeDetail id = {this.state.id} getIDS = {this.getIDS()} Recipes = {this.getRecipes()} Ingredients = {this.getIngredients()} Instructions = {this.getInstructions()} clicked = {(response) => this.setState({edit: response})}  returnID = {(data) => this.setState({id: data})} addState = {this.state.addStatus} />
         </div>
        
       	);


	}
}

function mapStateToProps(state){

return { recipes: state.recipes };

}

export default connect(mapStateToProps, { fetchRecipes })(RecipeList);
