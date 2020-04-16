import React from 'react';

const Pokemon = (props) => {
	return (
		<div className="container">
			<h2>Pokemon Component: {props.pokemonName.pokemon}</h2>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem sint nesciunt dolor aut corrupti accusantium aliquam, autem esse tempora officia at nostrum voluptatibus. Velit laborum expedita eveniet totam voluptas sapiente.</p>
			<button
				className="btn btn-success"
				onClick={() => props.addPokemon("Squirtle")}>
					Change Pokemon
			</button>
		</div>
	);
}

export default Pokemon