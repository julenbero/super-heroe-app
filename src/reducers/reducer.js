const initialState = {
	heroes       : [], //Lista de heroes Favoritos
	heroesLoaded : [], //Lista de Heroes por rango
	heroeDetail  : {} // Lista de Detalles del heroe
};

function rootReducer(state = initialState, action) {
	if (action.type === 'ADD_HEROE_FAVORITE') {
		return {
			...state,
			heroes : state.heroes.concat(action.payload)
		};
	}

	if (action.type === 'REMOVE_HEROE_FAVORITE') {
		return {
			...state,
			heroes : state.heroes.filter((heroe) => heroe.id !== action.payload.id)
		};
	}

	if (action.type === 'GET_HEROE') {
		return {
			...state,
			heroesLoaded : state.heroesLoaded.concat(action.payload)
		};
	}

	if (action.type === 'GET_HEROE_DETAILS') {
		return {
			...state,
			heroeDetail : action.payload
		};
	}

	return state;
}

export default rootReducer;
