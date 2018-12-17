import axios from 'axios';
export const FETCH_RECIPES = 'fetch_recipes';
export const GET_RECIPE = 'get_recipe';
export const DELETE_RECIPE = 'delete_recipe';
const POST_RECIPE = 'post_recipe';
const PUT_RECIPE = 'put_recipe';

const ROOT_URL = 'https://rocky-hamlet-47219.herokuapp.com/recipes';


export function fetchRecipes(){

  
const request = axios.get(`${ROOT_URL}`);

return {

      type: FETCH_RECIPES,
      payload: request

};

}

export function postRecipe(item){

const request = axios.post(`${ROOT_URL}`, item);

return {

     type: POST_RECIPE,
     payload: request

};

}

export function updateRecipe(id, item){

const request = axios.put(`${ROOT_URL}/${id}`, item);

return {

     type: PUT_RECIPE,
     payload: request

};

}

export function deletePost(id, post){

const request = axios.delete(`${ROOT_URL}/${id}`, {data: post});

return {

     type: DELETE_RECIPE,
     payload: id

};

}



