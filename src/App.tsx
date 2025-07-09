import { Routes, Route } from 'react-router';
import PrivateRoute, { privateRoutes, publicRoutes, routesProps } from './routes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function App() {
	return (
		<Routes>
			{publicRoutes.map((route: routesProps, index: number) => {
				const Layout = route.layout;
				const RouteComponent = route.component;
				return (
					<Route
						key={index}
						path={route.path}
						element={
							Layout !== undefined ? (
								<Layout>
									<RouteComponent />
								</Layout>
							) : (
								<RouteComponent />
							)
						}
					/>
				);
			})}
			<Route element={<PrivateRoute />}>
				{privateRoutes.map((route: routesProps, index: number) => {
					const Layout = route.layout;
					const RouteComponent = route.component;
					return (
						<Route
							key={index}
							path={route.path}
							element={
								Layout !== undefined ? (
									<Layout>
										<RouteComponent />
									</Layout>
								) : (
									<RouteComponent />
								)
							}
						/>
					);
				})}
			</Route>
		</Routes>
	);
}

export default App;
