import firebase from "firebase";
import * as _ from "lodash";
import * as moment from "moment";

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

firebase
  .auth()
  .signInAnonymously()
  .catch(function(error) {
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
  obtenerVentas: () => {
    return database
      .ref("ventas/")
      .once("value")
      .then(snap => {
        return snap.val();
      });
  },
  obtenerVenta: id => {
    return database
      .ref(`ventas/${id}`)
      .once("value")
      .then(snap => {
        return snap.val();
      });
  },
  guardarVenta: venta => {
    venta.id = database
      .ref()
      .child("ventas")
      .push().key;
    venta.fecha = new Date();
    venta.costo = venta.objeto === "tortilla" ? 10 : 15;
    return api.actualizarVenta(venta);
  },
  actualizarVenta: venta => {
    var updates = {};
    updates[`/ventas/${venta.id}`] = venta;
    return database.ref().update(updates);
  },
  obtenerProduccionDia: () => {
    return database
      .ref("produccionDia/")
      .once("value")
      .then(snap => {
        return snap.val();
      });
  },
  guardarProduccion: produccion => {
    if (produccion.id === "0") {
      produccion.id = database
        .ref()
        .child("produccionDia")
        .push().key;
      produccion.fecha = new Date();
    }
    return api.actualizarProduccion(produccion);
  },
  actualizarProduccion: produccion => {
    var updates = {};
    updates[`/produccionDia/${produccion.id}`] = produccion;
    return database.ref().update(updates);
  },
  buscarProduccionDia: dia => {
    return database
      .ref(`produccionDia/`)
      .once("value")
      .then(snap => {
        return api.buscarProducciones();
      })
      .then(prods => {
        var res = _.filter(
          prods,
          d => moment(d.fecha).format("DDMMYYYY") === dia
        );
        if (res.length > 0) {
          return res[0];
        }
        return null;
      });
  },
  buscarProducciones: () => {
    return database
      .ref("produccionDia/")
      .once("value")
      .then(snap => {
        return snap.val();
      });
  }
};

export { api };
