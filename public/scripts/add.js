(function() {
  'use strict';

  document.getElementById('add-btn').addEventListener('click', function() {
    writeUserData('testing');
    console.log('inside the add script, looking at writeUserData');
  })

  function writeUserData(question) {
    firebase.database().ref('/').push('test2')
      .then(function() {
        console.log('test2 saved to db');
      })
  }
})();
