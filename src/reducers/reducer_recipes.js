import { FETCH_RECIPES, DELETE_RECIPE } from '../actions/index';

export default function(state = {}, action){

switch(action.type){

case FETCH_RECIPES:

    return action.payload.data;

 case DELETE_RECIPE:

 return _.omit(state, action.payload);

default: 

   return state;

}

}


