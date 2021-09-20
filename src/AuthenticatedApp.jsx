import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Pages
import Home from './Pages/Home/Home';
import Channel from './Pages/Channel/Channel';

function AuthenticatedApp() {
    return <>
        <main>
			<Channel />
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/channel' component={Channel} exact />
				</Switch>
			</main>
    </>
}

export default AuthenticatedApp;