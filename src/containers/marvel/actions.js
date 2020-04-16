export const ADD_MARVEL_ACTION = "ADD_MARVEL";

export const addMarvelAction = (name) => {
	return {
		type: ADD_MARVEL_ACTION,
		payload: name
	}
}