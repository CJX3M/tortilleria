import firebase from 'firebase';

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyBYRC3V8pvOduOgO58xqp-RTH8RM8LN01M",
    authDomain: "tortilleria-35f9c.firebaseapp.com",
    databaseURL: "https://tortilleria-35f9c.firebaseio.com",
    projectId: "tortilleria-35f9c",
    storageBucket: "tortilleria-35f9c.appspot.com",
    messagingSenderId: "143484736391"
  };
  firebase.initializeApp(config);

  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  
  var logedUser = {};

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    logedUser = user;
  } else {
  }
});

var database = firebase.database();

const api = {
    obtenerVentas: () => database.ref().child('ventas'),
    obtenerVenta: (id) => {
      return database.ref(`ventas/${id}`).once("value", (snap) => {
        return snap.val();
      })
    },
    guardarVenta: (venta) => {
      venta.id = database.ref().child('ventas').push().key;
      venta.fecha = new Date();
      actualizarVenta(venta.id, venta);
    },
    actualizarVenta: (id, venta) => {
      var updates = {};
      updates[`/ventas/${id}`] = venta;
      database.ref().update(updates);
    }
}

module.exports = api;