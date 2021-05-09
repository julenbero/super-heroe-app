import { Switch, Route } from 'react-router-dom';
import Home from './components/showHeroes/ShowHeroes';
import Favorites from './components/favorites/Favorites';

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/favorites" component={Favorites} />
		</Switch>
	);
}
