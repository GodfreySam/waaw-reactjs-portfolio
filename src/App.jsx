// import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navigation/Navbar";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";

// CONTEXT API APP

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Intro} />
					<Route path="/project" exact component={Project} />
					<Route path="/contact" exact component={Contact} />
				</Switch>
			</Router>
			<Toggle />
		</>
	);
};

export default App;
