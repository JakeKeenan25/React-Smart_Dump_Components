import {connect} from 'react-redux';
import PokemonDumb from '../../components/pokemonDumb.js';
import {addPokemonAction} from './actions'

const mapStateToProps = (state) => {
	return {
		pokemonName: state.pokemon,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addPokemon: (name) => {
			dispatch(addPokemonAction(name))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDumb);