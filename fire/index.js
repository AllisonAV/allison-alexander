const firebase = require('firebase')

// -- // -- // -- // Firebase Config // -- // -- // -- //
const config = {
  apiKey: 'AIzaSyBpud8V9CmcuXFB30mFbz_4wIDpt9uXaH8',
  authDomain: 'allison-alexander.firebaseapp.com',
  databaseURL: 'https://allison-alexander.firebaseio.com',
  projectId: 'allison-alexander',
  storageBucket: 'allison-alexander.appspot.com',
  messagingSenderId: '953515025839'
}
// -- // -- // -- // -- // -- // -- // -- // -- // -- //

// Initialize the app, but make sure to do it only once.
//   (We need this for the tests. The test runner busts the require
//   cache when in watch mode; this will cause us to evaluate this
//   file multiple times. Without this protection, we would try to
//   initialize the app again, which causes Firebase to throw.
//
//   This is why global state makes a sad panda.)
firebase.__bonesApp || (firebase.__bonesApp = firebase.initializeApp(config))

module.exports = firebase
