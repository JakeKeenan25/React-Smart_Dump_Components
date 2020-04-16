import {ADD_POKEMON_ACTION} from './actions'

const initialState = {
	pokemon: 'Blastoise',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POKEMON_ACTION: return {
			...state,
			pokemon: action.payload,
		}

		default: return state;
	}
}

export default reducer