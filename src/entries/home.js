import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home';
import Data from '../api.json';

// Initialize app
const app = document.getElementById('app');

// Render in the DOM.
render(<Home data={Data}/>, app);
