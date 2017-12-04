(function() {
  'use strict';

  document.getElementById('addQuestion').addEventListener('click', function() {
    console.log('inside the add script, looking at writeUserData');
    // writeUserData('testing');
  })

  function writeUserData(question) {
    firebase.database().ref('/').push('test2')
      .then(function() {
        console.log('test2 saved to db');
      })
  }
})();
