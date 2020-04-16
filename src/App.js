import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/navbarDumb'
import PokemonSmart from './containers/pokemon/pokemonSmart.js'
import MarvelSmart from './containers/marvel/marvelSmart.js'

import {createStore, applyMiddleware} from 'redux';
import Reducer from './rootReducer';
import Logger from 'redux-logger';
import {Provider} from 'react-redux';

import {composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(Reducer,composeWithDevTools(applyMiddleware(Logger)));
store.subscribe(() =>{
	console.log("Store Updated:", store.getState());
})

console.log("Store:", store.getState());

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div className="App container">
						<Navbar />
						<Route exact path='/pokemon' render={
							(props) =><div id="pokemon"><PokemonSmart {...props} /></div>}
						/>
						<Route exact path='/marvel' render={
							(props) =><div id="marvel"><MarvelSmart {...props} /></div>}
						/>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
