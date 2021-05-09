import React, { Fragment } from 'react';
import Card from '../card/Card';

const ShowHeroes = () => {
	function renderHeroes() {
		return (
			<Fragment>
				<Card />
				<Card />
			</Fragment>
		);
	}

	return (
		<div>
			<h1>Heroes</h1>
			<div>{renderHeroes()}</div>
		</div>
	);
};

export default ShowHeroes;
