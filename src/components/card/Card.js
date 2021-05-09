import React from 'react';
import PropTypes from 'prop-types';

let batman = 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg';

const Card = ({ id, name, image, biography, appearance }) => {
	return (
		<div className="container">
			<div className="card-title">
				<h1>{name}</h1>
				<p># {id}</p>
			</div>
			<div className="card-image">
				<img src={image.url} alt="" />
			</div>
			<div className="card-description">
				<div>
					<p>Nombre Completo: {biography['full-name']}</p>{' '}
				</div>
				<div>
					<p>Genero: {appearance.gender}</p>
				</div>
				<div>
					<p>Editora: {biography.publisher}</p>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	id         : PropTypes.string.isRequired,
	name       : PropTypes.string.isRequired,
	image      : PropTypes.string.isRequired,
	biography  : PropTypes.string.isRequired,
	appearance : PropTypes.string.isRequired
};

Card.defaultProps = {
	id         : 69,
	name       : 'Batman',
	image      : { url: batman },
	biography  : { 'full-name': 'Bruce Wayne', publisher: 'DC Comics' },
	appearance : { gender: 'Male' }
};

export default Card;
