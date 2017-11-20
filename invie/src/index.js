import React from 'react';
import ReactDOM from 'react-dom';
import Invie from './Invie';
import './css/invie.css';
import './css/animations.css';
import cheet from 'cheet.js';
import logoPortada from './images/invie.png';
import logoPlatzi from './images/platzi.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import easterA from './images/easter-a.png';
import easterB from './images/easter-b.png';

const initialState = {
  isAnimated: false,
  menu: [
    {
      href: 'index.html',
      title: 'Home',
    },
    {
      href: '#guitarras',
      title: 'Guitarras',
    },
    {
      href: 'precios.html',
      title: 'Precios',
    },
    {
      href: 'hola.html',
      title: "Don't click me",
    }
  ],

  logoPortada: logoPortada,

  guitarras: [
    {
     image: acustica,
     alt: 'Guitarra Invie Acustica',
     name: 'Invie Acustica',
     features: [
      'Estilo vintage',
      'Madera pura',
      'Incluye estuche invisible de aluminio',
     ]
    },
    {
     image: classic,
     alt: 'Guitarra Invie Classic',
     name: 'Invie Classic',
     features: [
      'Estilo vintage',
      'Liviana',
      'Empieza tu camino como rockstar',
     ]
    }
  ]
}

function reducer(state, action) {
  switch(action.type) {
    case 'UPDATE_PROPS': {
      const newProps = action.payload.props;
      return { ...state, ...newProps }
    }
    default:
      return state
  }
}

const store = createStore(reducer, initialState);

const easter = {
  isAnimated: 'is-animated',
  menu: [

  ],
  logoPortada: logoPlatzi,

  guitarras: [
    {
     image: easterA,
     alt: 'Guitarra padre de familia',
     name: 'Invie Familiar',
     features: [
      'Lista para copiar a los Simpsons',
      'Aire puro',
      'Chistes malos',
     ]
    },
    {
     image: easterB,
     alt: 'Guitarra Invie Classic',
     name: 'Invie Classic',
     features: [
      'Estilo vintage',
      'Liviana',
      'Empieza tu camino como rockstar',
     ]
    }
  ]
}

cheet('i n v i e', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easter
    }
  });
  // console.log('lo lograste, descrubriste el easter egg');
});

cheet('g o b a c k', () => {
  // console.log('regresaste al estado inicial');
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: initialState,
    }
  });
});

ReactDOM.render(
  <Provider store={store}>
    <Invie />
  </Provider>,
  document.getElementById('root')
);
