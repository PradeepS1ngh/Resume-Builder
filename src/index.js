import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


// Redux 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer';

import thunk from 'redux-thunk';

//  FireBase
import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/app';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';


const firebaseConfig = {
  // apiKey: "AIzaSyC2Y8A0wa5HpPu2z8-RpgYGIZYtaLIk3IU",
  // authDomain: "resumebuilder-2dbce.firebaseapp.com",
  // databaseURL: "https://resumebuilder-2dbce.firebaseio.com",
  // projectId: "resumebuilder-2dbce",
  // storageBucket: "resumebuilder-2dbce.appspot.com",
  // messagingSenderId: "486147331808",
  // appId: "1:486147331808:web:65351bbfbcfb548e506285"
    apiKey: "AIzaSyCK1But5BuJaK1k3fSdsOXK6Zbo_6bgdbc",
    authDomain: "resumebuilder2.firebaseapp.com",
    projectId: "resumebuilder2",
    storageBucket: "resumebuilder2.appspot.com",
    messagingSenderId: "1070299204814",
    appId: "1:1070299204814:web:0bbd9a2a68899be87a549f",
    measurementId: "G-1ZQ8591M3Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const reduxStore = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase) // redux bindings for firestore,
  )
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './static/scss/site.scss';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom'; 
// import { Provider } from 'react-redux';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import { createStore, applyMiddleware, compose } from 'redux'
// import rootReducer from './reducers/rootReducer';
// import thunk from 'redux-thunk';
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import { createFirestoreInstance } from 'redux-firestore';

// var firebaseConfig = { 
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// const reduxStore = createStore(rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
//     reduxFirestore(firebase) // redux bindings for firestore,
    
//   )
// );



// ReactDOM.render

