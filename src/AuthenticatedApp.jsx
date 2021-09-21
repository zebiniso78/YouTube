import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Pages
import Home from './Pages/Home/Home';
import Channel from './Pages/Channel/Channel';
import VideoPlayer from './Pages/VideoPlayer/VideoPlayer';

function AuthenticatedApp() {
    return <>
        <main>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/channel' component={Channel} exact />
					<Route path='/video/2' componenet={VideoPlayer} exact />
				</Switch>
			</main>
    </>
}

export default AuthenticatedApp;