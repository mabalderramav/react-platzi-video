import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home';
import Data from '../api.json';

// Initialize app
const homeContainer = document.getElementById('home-container');

// Render in the DOM.
render(<Home data={Data}/>, homeContainer);
