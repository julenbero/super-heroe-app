import React, { Fragment } from 'react';
import Card from '../card/Card';
import './ShowHeroes.css';

const ShowHeroes = () => {
	function renderHeroes() {
		return (
			<Fragment>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</Fragment>
		);
	}

	return (
		<div className="content">
			<h1>Listado Heroes</h1>
			<div className="card-item">{renderHeroes()}</div>
		</div>
	);
};

export default ShowHeroes;
