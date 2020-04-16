export const ADD_POKEMON_ACTION = "ADD_POKEMON";

export const addPokemonAction = (name) => {
	return {
		type: ADD_POKEMON_ACTION,
		payload: name
	}
}