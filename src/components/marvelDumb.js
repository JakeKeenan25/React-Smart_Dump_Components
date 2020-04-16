import React from 'react';

const Marvel = (props) => {
	return (
		<div className="container">
			<h2>Marvel Component: {props.marvelName.marvel}</h2>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem sint nesciunt dolor aut corrupti accusantium aliquam, autem esse tempora officia at nostrum voluptatibus. Velit laborum expedita eveniet totam voluptas sapiente.</p>
			<button
				className="btn btn-danger"
				onClick={() => props.addMarvel("Hulk")}>
					Change Marvel Movie
			</button>
		</div>
	);
}

export default Marvel