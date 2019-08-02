import React from 'react';
import ReactDOM from 'react-dom';
import ControlledInput from './components/ControlledInput.js';

ReactDOM.render(
	<div>
		<ControlledInput fields={{ "First Name": "", "Last Name": "", "Favorite Programing Language": "Typescript" }}/>
	</div>,
	document.getElementById('root')
);