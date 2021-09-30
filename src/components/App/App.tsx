import React from "react";
import Activities from "../Activities/Activities";

interface AppProps {
    
}

const App: React.FunctionComponent<AppProps> = ({}) => {
	return <div className="App">
		<Activities />
	</div>;
};

export default App;

import "./App.style";
