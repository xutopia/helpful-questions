(function() {
  'use strict';

  // register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function() {
        console.log('Service Worker registered');
      })
      .catch(function(err) {
        console.log('error in service worker registration: ', err)
      })
  }

  // connect to firebase database
  try {
    var config = {
      apiKey: "AIzaSyAp1C0ZZpCIaF2bOeN2Mo4i7XXzFlcndZA",
      authDomain: "helpful-questions-3a0dd.firebaseapp.com",
      databaseURL: "https://helpful-questions-3a0dd.firebaseio.com",
      projectId: "helpful-questions-3a0dd",
      storageBucket: "helpful-questions-3a0dd.appspot.com",
      messagingSenderId: "308388871177"
    };
    firebase.initializeApp(config);
  } catch (e) {
    console.error(e);
  }


})();




// try {
//   var ref = firebase.database().ref();
//   ref.once("value")
//   .then(function(snapshot) {
//     document.getElementById('render').innerHTML = JSON.stringify(snapshot.val(), null, 2);
//   });
// } catch (err) {
//   console.error(err);
// }
