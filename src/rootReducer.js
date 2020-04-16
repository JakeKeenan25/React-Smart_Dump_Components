import {combineReducers} from 'redux';
import marvel from './containers/marvel/reducer';
import pokemon from './containers/pokemon/reducer';

export default combineReducers({
	marvel,
	pokemon
});