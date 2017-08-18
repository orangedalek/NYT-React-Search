import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "./children/Search";
import Saved from "./children/Saved";

const Main = () => (
	<main>
		<Switch>
			<Route path="/" component={Search}/>
			<Route path="/saved" component={Saved}/>
		</Switch>
	</main>
)

export default Main;