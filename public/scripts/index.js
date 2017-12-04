(function() {
  // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  //
  // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // Initialize Firebase

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function() {
        console.log('Service Worker registered');
      })
      .catch(function(err) {
        console.log('error in service worker registration: ', err)
      })
  }

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
    var connectionInfo = navigator.connection;
    console.log('connectionInfo: ', connectionInfo);
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
