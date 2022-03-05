import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoardScreens from './Screens/BoardScreens';
import localStorage from './localStorage';

//localStorage.init();

ReactDOM.render(
  <BoardScreens boardName="Sunflower"/>,
  document.getElementById('root')
);


