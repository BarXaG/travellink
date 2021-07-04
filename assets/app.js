/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/normalize.css';
import './styles/app.css';


import React from 'react';
import ReactDOM from 'react-dom';

import Form from './components/form';


// Recherche si la page actuelle contient une balise racine React.
let reactRoot = document.getElementById('react-root');

// Est-ce que la balise a été trouvée ?
if (reactRoot !== null) {

  // Oui, démarrage de React.
  ReactDOM.render(<Form />, reactRoot);
}