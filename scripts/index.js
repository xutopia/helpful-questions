document.addEventListener('DOMContentLoaded', function() {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAp1C0ZZpCIaF2bOeN2Mo4i7XXzFlcndZA",
    authDomain: "helpful-questions-3a0dd.firebaseapp.com",
    databaseURL: "https://helpful-questions-3a0dd.firebaseio.com",
    projectId: "helpful-questions-3a0dd",
    storageBucket: "helpful-questions-3a0dd.appspot.com",
    messagingSenderId: "308388871177"
  };
  firebase.initializeApp(config);

  try {
    var ref = firebase.database().ref();
    ref.on("value", function(snapshot){
      document.getElementById('render').innerHTML = JSON.stringify(snapshot.val(), null, 2);
    });
  } catch (err) {
    console.error(err);
  }

  try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
  } catch (e) {
    console.error(e);
    document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
  }
});
