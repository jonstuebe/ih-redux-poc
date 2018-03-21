import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import "antd/dist/antd.css";

import Debug from "./containers/Debug";
import List from "./containers/List";

import store from "./store";

const App = () => (
	<Provider store={store}>
		<div>
			<List />
			<Debug />
		</div>
	</Provider>
);

render(<App />, document.getElementById("root"));
