import React, { Fragment } from 'react';
import NavBar from './components/navbar/NavBar';
import Routes from './Routes';

function App() {
	return (
		<Fragment>
			<NavBar />
			{/* <h1>Super Heroes App</h1> */}
			<Routes />
		</Fragment>
	);
}

export default App;
