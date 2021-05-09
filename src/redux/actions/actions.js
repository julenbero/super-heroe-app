import axios from 'axios';

const { ACCESS_TOKEN } = process.env;

export function addHeroesFavorite(payload) {
	return { type: 'ADD_HEROE_FAVORITE', payload };
}

export function removeHeroeFavorite(payload) {
	return { type: 'REMOVE_HEROE_FAVORITE', payload };
}

export function getHeroe(heroe_id) {
	return function(dispatch) {
		return axios
			.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${heroe_id}`)
			.then((res) => {
				dispatch({ type: 'GET_HEROE', payload: res.data });
			})
			.catch((e) => console.log('No se encontro heroe-', heroe_id));
	};
}

export function getHeroeDetails(heroe_id) {
	return function(dispatch) {
		return axios
			.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${heroe_id}`)
			.then((res) => {
				dispatch({ type: 'GET_HEROE_DETAILS', payload: res.data });
			})
			.catch((e) => console.log('No se encontro heroe-', heroe_id));
	};
}
