import React from 'react';
import {render} from 'react-dom';
import PlayList from './src/playlist/components/playlist';
import Data from './src/api.json';

const app = document.getElementById('app');

render(<PlayList data={Data}/>, app);
