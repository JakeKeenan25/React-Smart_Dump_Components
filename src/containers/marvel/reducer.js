import {ADD_MARVEL_ACTION} from './actions'

const initialState = {
	marvel: 'IronMan',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MARVEL_ACTION: return {
			...state,
			marvel: action.payload,
		}

		default: return state;
  }
}

export default reducer