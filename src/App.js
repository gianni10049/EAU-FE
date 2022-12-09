import './static/css/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {ProvideAuth, RouteControl} from './components/Routes/RouteControl';
import routes from './routes/routes';
import React from 'react';
import Page404 from './components/404/404';

function App() {
	return (
		<Router>
			<Routes>
				{routes.map((r) => {
					return (
						<Route
							path={r.path}
							key={r.key}
							element={
								<ProvideAuth
									account_needed={r.account_needed}>
									<RouteControl data={r}>
										{r.component}
									</RouteControl>
								</ProvideAuth>
							}
						/>
					);
				})}

				<Route
					key={'page404All'}
					path='*'
					exact={true}
					element={<Page404 code={404} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
