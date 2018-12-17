import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import RecipeList from './components/recipe-list';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
     <div>
     <div className = 'header'><h1>RECIPE DRAWER</h1></div> 
     <RecipeList />
     </div>
  </Provider>
  , document.querySelector('.container'));
