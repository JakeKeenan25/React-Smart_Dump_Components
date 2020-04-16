import {connect} from 'react-redux';
import MarvelDumb from '../../components/marvelDumb.js';
import {addMarvelAction} from './actions'

const mapStateToProps = (state) => {
	return {
		marvelName: state.marvel,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addMarvel: (name) => {
			dispatch(addMarvelAction(name))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(MarvelDumb);